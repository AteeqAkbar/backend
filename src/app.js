const express = require("express");
const routes = require("./routes");



//cookie- parser require
const cookieParser = require("cookie-parser");

const app = express();

const cors = require("cors");

//express setup
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.use("/", routes);


module.exports = app;
