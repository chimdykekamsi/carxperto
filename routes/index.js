const express = require("express");
const authRouter = require("./auth.route");

const Router = express.Router();

Router.use("/auth",authRouter);


module.exports = Router;