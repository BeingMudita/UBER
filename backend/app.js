const dotevnv = require("dotenv");
dotevnv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDb = require("./db/db");

connectToDb();


app.use(cors());

app.get("/", (req,res)=>{
    res.send("Hello Wrold");
});

module.exports = app;

