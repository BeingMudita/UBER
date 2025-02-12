const axios = require('axios');


module.exports.getAddressCoordinate = async (address) => {
    try {
        if (!address) throw new Error("Address is required");

        const response = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${process.env.MAPS_API}`
        );

        if (response.status !== 200 || !response.data.features.length) {
            throw new Error("Invalid address");
        }

        const { center } = response.data.features[0];
        return { lng: center[0], lat: center[1] };
    } catch (error) {
        console.error("Error in getAddressCoordinate:", error.message);
        throw error;
    }
};

module.exports.getDistanceTime = async (pickup, destination) => {
    if (!pickup || !destination) {
        throw new Error("Origin and destination are required");
    }

    const apiKey = process.env.MAPS_API;
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${pickup.lng},${pickup.lat};${destination.lng},${destination.lat}?access_token=${apiKey}&geometries=geojson`;

    try {
        const response = await axios.get(url);

        if (response.status === 200 && response.data.routes.length > 0) {
            const route = response.data.routes[0]; // Selecting the first route

            return {
                distance: {
                    text: `${(route.distance / 1000).toFixed(1)} Km`,
                    value: route.distance
                },
                duration: {
                    text: formatDuration(route.duration),
                    value: Math.round(route.duration) // Seconds
                },
                status: "OK"
            };
        } else {
            throw new Error("No valid route found");
        }
    } catch (err) {
        console.error("Error fetching distance and time:", err.message);
        throw err;
    }
};

// Helper function to format duration in "X hours Y minutes"
function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return hours > 0 ? `${hours} hr ${minutes} min` : `${minutes} min`;
}

module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error("Query is required");
    }

    const apiKey = process.env.MAPS_API;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(input)}.json?access_token=${apiKey}&country=IN&types=place,locality,neighborhood,region`;

    try {
        const response = await axios.get(url);
        
        if (response.status === 200 && response.data.features.length > 0) {
            return response.data.features.map((place) => ({
                name: place.text,
                full_name: place.place_name,
                coordinates: {
                    lat: place.center[1],
                    lng: place.center[0],
                },
            }));
        } else {
            throw new Error("No suggestions found");
        }
    } catch (err) {
        console.error("Error fetching autocomplete suggestions:", err.message);
        throw err;
    }
};
