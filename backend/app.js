const dotevnv = require("dotenv");
dotevnv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.routes");
const cookiParser = require("cookie-parser");

connectToDb();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookiParser()); 

app.get("/", (req,res)=>{
    res.send("Hello Wrold");
});


app.use("/users", userRoutes);

module.exports = app;

