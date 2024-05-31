const asyncHandler = require("express-async-handler");
const Car = require("../models/car.model");
const User = require("../models/user.model");
const Seller = require("../models/seller.model");

// Method POST
// Endpoint {baseurl}/cars
// Listing a new car
// Access Sellers only

const createCar = asyncHandler(async (req, res) => {
    const {id} = req.user;
    const user = await User.findById(id);
    const {
        name,
        model,
        category,
        sellingPrice,
        costPrice,
        condition,
        shortDescription,
        longDescription,
        year,
        color,
        mileage,
        make,
        quantity,
    } = req.body;
    let {discount,discountType} = req.body;

    if(!user){
        res.status(404);
        throw new Error("User not found");
    };
    const seller = await Seller.findOne({userId: user._id});
    console.log(user._id);
    if(!seller){
        res.status(404);
        throw new Error("Seller not found");
    }
    if(seller.isVerified === false){
        res.status(400);
        throw new Error("Seller is not verified");
    }

    if(!discount){
        discount = 0;
        discountType = null;
    }
    const car = await Car.create({
        name,
        model,
        category,
        sellingPrice: parseFloat(sellingPrice),
        costPrice: parseFloat(costPrice),
        condition,
        shortDescription,
        longDescription,
        year,
        color,
        mileage,
        make,
        quantity: parseInt(quantity),
        discount: parseFloat(discount),
        discountType,
        image: req.body.image.url,
        sellerId: seller._id,
        status: "pending"
    });
    
    if(!car){
        res.status(500);
        throw new Error("Car not created");
    }
    seller.cars.push({
        carId: car._id
    });
    await seller.save();
    return res.status(201).json({
        success: true,
        message: "Your car will be listed shortly pending approval by admin",
        car,
        seller
    })
});



module.exports = {
    createCar
};