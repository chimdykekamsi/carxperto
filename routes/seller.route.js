const express = require("express");
const validateToken = require("../middlewares/validateTokenHandler");
const checkForMissingFields = require("../middlewares/checkMissingFields");
const { registerSeller, verifySeller } = require("../controllers/seller.controller");
const checkAccountType = require("../middlewares/checkAccountType");

const sellerRoute = express.Router();

sellerRoute.post("/register", validateToken, checkAccountType(["dormant"]), checkForMissingFields(["storeName","state","town","country"]), registerSeller);
sellerRoute.post("/verify", validateToken, checkAccountType(["admin"]), checkForMissingFields(["sellerId"]), verifySeller);

module.exports = sellerRoute;