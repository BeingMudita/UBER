const axios = require('axios')

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.MAPS_API;
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${origin.lng},${origin.ltd};${destination.lng},${destination.ltd}?access_token=${apiKey}&geometries=geojson`;


    try {
        const response = await axios.get(url);
        if (response.data.features.length > 0) {
            const [lng, lat] = response.data.features[0].center; // Mapbox returns [lng, lat]
            return { ltd: lat, lng: lng };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};


module.exports.getDistanceTime = async (origin, destination) => {
    try {
        if (!origin || !destination) {
            throw new Error("Origin and destination are required");
        }

        const response = await axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/${origin.lng},${origin.lat};${destination.lng},${destination.lat}?access_token=${process.env.MAPS_API}`);

        if (response.status !== 200) {
            throw new Error(`Mapbox API error: ${response.statusText}`);
        }

        return response.data;
    } catch (error) {
        console.error("Error in getDistanceTime:", error.message);
        throw error;
    }
};
