const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true, "This field is required!"]
    },
    email:{
        type:String,
        required:[true, "This field is required!"]
    },
    password:{
        type:String,
        required:[true, "This field is required!"]
    },
    fullname:{
        type: String,
        required:[true, "This field is required!"]
    },
    account_type:{
        type:String,
        required:false,
        default:"buyer"
    }
},
    {
        timesstamps: true
    }
)

module.exports = mongoose.model("User", userSchema);