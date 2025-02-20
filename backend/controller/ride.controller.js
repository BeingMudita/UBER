const rideService = require("../services/ride.service");

module.exports.createRide = async (req, res) => {
    try {
        const user = req.user; // Extract user
        const { pickup, destination, vehicleType } = req.body;

        if (!user || !pickup || !destination || !vehicleType) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Calculate fare
        const fareDetails = await rideService.getFare(pickup, destination);
        const fare = fareDetails[vehicleType]; // Get fare for the selected vehicle type

        // Create ride
        const ride = await rideService.createRide({ user, pickup, destination, fare, vehicleType });
        res.status(201).json(ride);
    } catch (error) {
        console.error("Error creating ride:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};  



// module.exports.createRide1 = async (req, res, next) => {
//     console.log("Received Data:", req.body);
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }

//     const { pickup, destination, vehicleType } = req.body;

//     try {
//         const pickupCoordinates = await mapService.getAddressCoordinate(pickup);
//         const destinationCoordinates = await mapService.getAddressCoordinate(destination);

//         if (!pickupCoordinates || !destinationCoordinates) {
//             return res.status(400).json({ message: "Invalid pickup or destination address" });
//         }
//         const distanceTime = await mapService.getDistanceTime(pickupCoordinates, destinationCoordinates);
//         const ride = await rideService.createRide({
//             user: req.user._id,
//             pickup,
//             destination,
//             vehicleType,
//             estimatedDistance: distanceTime.distance.text,
//             estimatedDuration: distanceTime.duration.text
//         });

//         // Send response immediately
//         res.status(201).json(ride);

//         // // Find captains within a 2 km radius
//         // const captainsInRadius = await mapService.getCaptainsInTheRadius(
//         //     pickupCoordinates.lat,
//         //     pickupCoordinates.lng,
//         //     2
//         // );

//         // if (captainsInRadius.length === 0) {
//         //     console.warn("No captains found in radius");
//         //     return;
//         // }

//         // // Hide OTP for security before broadcasting
//         // ride.otp = "";

//         // // Populate ride details with user info
//         // const rideWithUser = await rideModel.findById(ride._id).populate("user");

//         // // Notify available captains via WebSocket
//         // captainsInRadius.forEach(captain => {
//         //     sendMessageToSocketId(captain.socketId, {
//         //         event: "new-ride",
//         //         data: rideWithUser
//         //     });
//         // });
//     } catch (err) {
//         console.error("Error creating ride:", err.message);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// };
