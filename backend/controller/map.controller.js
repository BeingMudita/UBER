const mapService = require('../services/maps.service');
const { validationResult } = require('express-validator');


module.exports.getCoordinates = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    const { address } = req.query;

    try {
        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates);
    } catch (error) {
        res.status(404).json({ message: 'Coordinates not found' });
    }
}


module.exports.getDistanceTime = async (req, res, next) => {
    try {
        const { origin, destination } = req.query;

        if (!origin || !destination) {
            return res.status(400).json({ message: "Origin and destination are required" });
        }

        const originCoords = await mapService.getAddressCoordinate(origin.trim());
        const destinationCoords = await mapService.getAddressCoordinate(destination.trim());

        if (!originCoords || !destinationCoords) {
            return res.status(400).json({ message: "Invalid origin or destination" });
        }

        const distanceTime = await mapService.getDistanceTime(originCoords, destinationCoords);
        return res.status(200).json(distanceTime);

    } catch (err) {
        console.error("Error in getDistanceTime:", err);
        return res.status(500).json({ message: err.message });
    }
};

module.exports.getAutoCompleteSuggestions = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { input } = req.query; 
        if (!input) {
            return res.status(400).json({ message: "Input query is required" });
        }

        const suggestions = await mapService.getAutoCompleteSuggestions(input);
        
        return res.status(200).json({ status: "OK", suggestions });
    } catch (err) {
        console.error("Error in getAutoCompleteSuggestions:", err.message);
        res.status(500).json({ message: "Internal server error" });
    }
};