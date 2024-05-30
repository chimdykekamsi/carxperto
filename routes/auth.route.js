const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/auth.controller");
const validateToken = require("../middlewares/validateTokenHandler");
const checkForMissingFields = require("../middlewares/checkMissingFields");


const authRouter = express.Router();

authRouter.post("/register",checkForMissingFields(["username", "email", "password", "fullname"]),registerUser);
authRouter.post("/login",loginUser);
authRouter.get("/get_current_user",validateToken,currentUser);

module.exports = authRouter;