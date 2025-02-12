const { validationResult } = require("express-validator");
const rideService = require("../services/ride.service");
const mapService = require("../services/maps.service");
const rideModel = require("../models/ride.model");
const sendMessageToSocketId = require("../socket");

module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination, vehicleType } = req.body;

    try {
        // Get pickup and destination coordinates
        const pickupCoordinates = await mapService.getAddressCoordinate(pickup);
        const destinationCoordinates = await mapService.getAddressCoordinate(destination);

        if (!pickupCoordinates || !destinationCoordinates) {
            return res.status(400).json({ message: "Invalid pickup or destination address" });
        }

        // Calculate estimated distance and time
        const distanceTime = await mapService.getDistanceTime(pickupCoordinates, destinationCoordinates);

        // Create ride
        const ride = await rideService.createRide({
            user: req.user._id,
            pickup,
            destination,
            vehicleType,
            estimatedDistance: distanceTime.distance.text,
            estimatedDuration: distanceTime.duration.text
        });

        // Send response immediately
        res.status(201).json(ride);

        // Find captains within a 2 km radius
        const captainsInRadius = await mapService.getCaptainsInTheRadius(
            pickupCoordinates.lat,
            pickupCoordinates.lng,
            2
        );

        if (captainsInRadius.length === 0) {
            console.warn("No captains found in radius");
            return;
        }

        // Hide OTP for security before broadcasting
        ride.otp = "";

        // Populate ride details with user info
        const rideWithUser = await rideModel.findById(ride._id).populate("user");

        // Notify available captains via WebSocket
        captainsInRadius.forEach(captain => {
            sendMessageToSocketId(captain.socketId, {
                event: "new-ride",
                data: rideWithUser
            });
        });
    } catch (err) {
        console.error("Error creating ride:", err.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};
