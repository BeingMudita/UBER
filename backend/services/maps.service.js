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


module.exports.getDistanceTime = async (origin, destination) => {
    try {
        if (!origin || !destination) {
            throw new Error("Origin and destination are required");
        }

        const response = await axios.get(
            `https://api.mapbox.com/directions/v5/mapbox/driving/${origin.lng},${origin.lat};${destination.lng},${destination.lat}?access_token=${process.env.MAPS_API}`
        );

        if (response.status !== 200) {
            throw new Error(`Mapbox API error: ${response.statusText}`);
        }

        const route = response.data.routes[0];

        if (!route) {
            throw new Error("No route found");
        }

        const distanceValue = route.distance; 
        const durationValue = route.duration; 

        const distanceText = `${(distanceValue / 1000).toFixed(0)} Km`;

        const days = Math.floor(durationValue / 86400); 
        const hours = Math.floor((durationValue % 86400) / 3600); 

        let durationText = "";
        if (days > 0) {
            durationText += `${days} day${days > 1 ? "s" : ""} `;
        }
        if (hours > 0) {
            durationText += `${hours} hour${hours > 1 ? "s" : ""}`;
        }

        return {
            distance: {
                text: distanceText,
                value: distanceValue,
            },
            duration: {
                text: durationText.trim(),
                value: durationValue,
            },
            status: "OK",
        };
    } catch (error) {
        console.error("Error in getDistanceTime:", error.message);
        throw error;
    }
};

module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error("Query is required");
    }

    const apiKey = process.env.MAPS_API;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(input)}.json?access_token=${apiKey}&autocomplete=true&limit=5`;

    try {
        const response = await axios.get(url);

        if (response.status === 200 && response.data.features) {
            // Extracting relevant details from the response
            const suggestions = response.data.features.map((feature) => ({
                name: feature.place_name,
                coordinates: {
                    lat: feature.center[1],
                    lng: feature.center[0]
                }
            }));

            return suggestions;
        } else {
            throw new Error("Unable to fetch suggestions");
        }
    } catch (err) {
        console.error("Error fetching autocomplete suggestions:", err.message);
        throw err;
    }
};
