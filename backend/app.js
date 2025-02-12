const dotevnv = require("dotenv");
dotevnv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
const cookiParser = require("cookie-parser");
const mapsRoutes = require("./routes/maps.routes");
const rideRoutes = require("./routes/ride.routes")

connectToDb();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookiParser()); 

app.get("/", (req,res)=>{
    res.send("Hello Wrold");
});


app.use("/users", userRoutes);
app.use("/captains", captainRoutes);
app.use("/maps", mapsRoutes);
app.use("/rides", rideRoutes)


module.exports = app;

