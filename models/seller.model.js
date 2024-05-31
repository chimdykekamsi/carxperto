const mongoose = require("mongoose");

const SellerSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    location:{
        state:{
            type: String,
            required: true
        },
        town:{
            type: String,
            required: true
        },
        street:{
            type: String
        },
        zipCode:{
            type: String
        },
        country:{
            type: String,
            required: true
        },
        other:{
            type: String
        }
    },
    storeName:{
        type: String,
        required: true
    },
    cars:[
        {
            carId:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Car"
            }
        }
    ],
    reviews:[
        {
            userId:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            review:{
                type: String,
                required: true
            },
            rating:{
                type: Number,
                required: true
            }
        }
    ],
    rating:{
        type: Number,
        default: 0
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    orders:[
        {
            orderId:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Order"
            }
        }
    ],
    bio:{
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true
    }
},
    {
        timesstamps: true
    }
)

module.exports = mongoose.model("Seller", SellerSchema);