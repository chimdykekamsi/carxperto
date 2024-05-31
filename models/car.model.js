const mongoose = require("mongoose");

const CarSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    sellingPrice:{
        type: Number,
        required: true
    },
    costPrice:{
        type: Number,
        required: true
    },
    condition:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    shortDescription:{
        type: String,
        required: true
    },
    longDescription:{
        type: String,
        required: true
    },
    year:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    mileage:{
        type: String,
        required: true
    },
    make:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    sellerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller",
        required: true
    },
    discount:{
        type: Number
    },
    discountType:{
        type: String
    }
},
    {
        timesstamps: true
    }
)

module.exports = mongoose.model("Car", CarSchema);