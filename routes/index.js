const express = require("express");
const authRoute = require("./auth.route");
const sellerRoute = require("./seller.route");
const carRoute = require("./car.route");

const Router = express.Router();

Router.use("/auth",authRoute);
Router.use("/sellers",sellerRoute);
Router.use("/cars", carRoute);


module.exports = Router;