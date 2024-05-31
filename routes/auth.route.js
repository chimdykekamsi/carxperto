const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/auth.controller");
const validateToken = require("../middlewares/validateTokenHandler");
const checkForMissingFields = require("../middlewares/checkMissingFields");


const authRoute = express.Router();

authRoute.post("/register",checkForMissingFields(["username", "email", "password", "fullname"]),registerUser);
authRoute.post("/login",loginUser);
authRoute.get("/get_current_user",validateToken,currentUser);

module.exports = authRoute;