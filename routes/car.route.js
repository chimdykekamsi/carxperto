const express = require("express");
const validateToken = require("../middlewares/validateTokenHandler");
const checkForMissingFields = require("../middlewares/checkMissingFields");
const multer = require('multer');
const { uploadImagesToCloudinary } = require("../middlewares/uploadToCloudinary");
const { createCar, carAction, deleteCar, updateCar } = require("../controllers/car.controller");
const checkAccountType = require("../middlewares/checkAccountType");

// Set up multer middleware
const upload = multer({ dest: 'uploads/' });

const carRoute = express.Router();

carRoute.route("/")
    .post(
        validateToken,
        upload.single('image'), 
        checkAccountType(["seller"]),
        checkForMissingFields([
            "name", "model", "category", "sellingPrice", "costPrice", "condition",
            "shortDescription", "longDescription", "year", "color", "mileage", "make", "quantity"
        ]),
        uploadImagesToCloudinary,
        createCar
    );


carRoute.route("/:carId/:action")
    .post(
        validateToken,
        checkAccountType(["seller"]),
        carAction
    );

carRoute.route("/:carId")
    .delete(
        validateToken,
        checkAccountType(["seller"]),
        deleteCar
    )
    .put(
        validateToken,
        checkAccountType(["seller"]),
        upload.single('image'),
        async(req, res, next) => {
            if (req.file) {
                await uploadImagesToCloudinary(req,res,next);
            } 
        },
        updateCar
    );

module.exports = carRoute;
