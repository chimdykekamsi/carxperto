const asyncHandler = require("express-async-handler");
const Car = require("../models/car.model");
const User = require("../models/user.model");
const Seller = require("../models/seller.model");
const { deleteImagesFromCloudinary } = require("../middlewares/uploadToCloudinary");


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
    if(!seller){
        res.status(404);
        throw new Error("Seller not found");
    }
    if(seller.isVerified === false){
        res.status(400);
        throw new Error("Seller is not verified");
    }
    if(!req.body.image.url){
        res.status(400);
        throw new Error("Image not found");
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
        status: "draft"
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
        message: "Your car has been listed succesfully",
        car,
        seller
    })
});


const carAction = asyncHandler(async(req,res)=>{
    const {carId, action} = req.params;
    const {id} = req.user;
    const user = await User.findById(id);
    const seller = await Seller.findOne({userId: user._id});
    if(!seller){
        res.status(404);
        throw new Error("Seller not found");
    }
    if(seller.isVerified === false){
        res.status(400);
        throw new Error("Seller is not verified");
    }    

    const car = await Car.findById(carId);
    if (!car) {
        res.status(404);
        throw new Error("Car not found");
    }
    
    const possibleActions = ["draft", "publish"];
    if(!possibleActions.includes(action)){
        res.status(400);
        throw new Error("Invalid action");
    }
    car.status = action;
    await car.save();
    return res.status(200).json({
        success: true,
        message: `car saved as ${action}`
    });
})

const deleteCar = asyncHandler(async(req,res) => {
    const {carId} = req.params;
    const {id} = req.user;
    const user = await User.findById(id);
    const seller = await Seller.findOne({userId: user._id});
    if(!seller){
        res.status(404);
        throw new Error("Seller not found");
    }
    if(seller.isVerified === false){
        res.status(400);
        throw new Error("Seller is not verified");
    }    

    const car = await Car.findById(carId);
    if (!car) {
        res.status(404);
        throw new Error("Car not found");
    }
    await deleteImagesFromCloudinary(car.image);
    await Car.findByIdAndDelete(carId);
    return res.status(200).json({
        status: true,
        message: "Car deleted"
    })
});

const updateCar = asyncHandler(async (req, res) => {
    const { carId } = req.params;
    const { id } = req.user;
    console.log(req.body);

    const user = await User.findById(id);
    const seller = await Seller.findOne({ userId: user._id });

    if (!seller) {
        res.status(404);
        throw new Error("Seller not found");
    }

    if (seller.isVerified === false) {
        res.status(400);
        throw new Error("Seller is not verified");
    }

    const car = await Car.findById(carId);
    if (!car) {
        res.status(404);
        throw new Error("Car not found");
    }

    if (seller._id.toString() !== car.sellerId.toString()) {
        res.status(400);
        throw new Error("This car belongs to another seller");
    }

    const updatedFields = {
        name: req.body.name || car.name,
        model: req.body.model || car.model,
        category: req.body.category || car.category,
        sellingPrice: req.body.sellingPrice !== undefined ? parseFloat(req.body.sellingPrice) : car.sellingPrice,
        costPrice: req.body.costPrice !== undefined ? parseFloat(req.body.costPrice) : car.costPrice,
        condition: req.body.condition || car.condition,
        shortDescription: req.body.shortDescription || car.shortDescription,
        longDescription: req.body.longDescription || car.longDescription,
        year: req.body.year || car.year,
        color: req.body.color || car.color,
        mileage: req.body.mileage !== undefined ? parseInt(req.body.mileage) : car.mileage,
        make: req.body.make || car.make,
        quantity: req.body.quantity !== undefined ? parseInt(req.body.quantity) : car.quantity,
        discount: req.body.discount !== undefined ? parseFloat(req.body.discount) : car.discount,
        discountType: req.body.discountType || car.discountType,
        status: req.body.status || car.status,
    };

    if (req.body.image) {
        await deleteImagesFromCloudinary(car.image);
        updatedFields.image = req.body.image;
    }

    Object.assign(car, updatedFields);

    await car.save();

    return res.status(200).json({
        success: true,
        message: "Car updated successfully",
        car,
    });
});

module.exports = {
    updateCar,
};


module.exports = {
    createCar,
    carAction,
    deleteCar,
    updateCar
};