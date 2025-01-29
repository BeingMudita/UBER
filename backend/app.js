const dotevnv = require("dotenv");
dotevnv.config();
const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());

app.get("/", (req,res)=>{
    res.send("Hello Wrold");
});

module.exports = app;

