const asyncHandler = require("express-async-handler");
const Seller = require("../models/seller.model");
const User = require("../models/user.model");

// Method POST
// Endpoint {baseurl}/sellers/register
// Onboarding a new seller
// Access Authorized users

const registerSeller = asyncHandler(async (req, res) => {
    const {user} = req;
    const {
        storeName,
        state,
        town,
        street,
        zipCode,
        country,
        other
    } = req.body;
    const validateUser = await User.findById(user.id);
    if(! validateUser){
        res.status(400);
        throw new Error("User not found");
    }
    const validateSeller = await Seller.findOne({userId: user._id});
    if(validateSeller){
        res.status(400);
        throw new Error("Seller already exists");
    };

    const seller = await Seller.create({
        userId: user.id,
        storeName,
        location: {
            state,
            town,
            street,
            zipCode,
            country,
            other
        }
    });

    await User.findByIdAndUpdate(user.id, {
        account_type: "seller"
    });

    return res.status(201).json(seller);
});

// Method POST
// Endpoint {baseurl}/sellers/verify
// Verifying a seller
// Access Admin

const verifySeller = asyncHandler(async (req,res) => {
    const {id} = req.user;
    const user = await User.findById(id);
    if(user.account_type !== "admin"){
        res.status(400);
        throw new Error("Access denied Only admins can access this route");
    }
    const {sellerId} = req.body;
    const seller = await Seller.findById(sellerId);
    if(!seller){
        res.status(400);
        throw new Error("Seller not found");
    }
    seller.isVerified = true;
    await seller.save();
    return res.status(200).json({success:true,seller});
})

module.exports = {
    registerSeller,
    verifySeller
};