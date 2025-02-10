const axios = require('axios')
module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.MAPS_API;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${apiKey}`;

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
