const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

// Method POST
// Endpoint {baseurl}/auth/register
// Desc Register and authenticate new user

const registerUser = asyncHandler(
    async (req, res, next) => {
        const { username, email, password, fullname, account_type } = req.body;
        
        const containsSpaces = /\s/.test(username);
        if (containsSpaces) {
            res.status(400);
            throw new Error("Username cannot contain spaces");
        }


        const userAvailable = await User.findOne({ $or: [{ email: email }, { username: username }] });

        if (userAvailable) {
            res.status(400);
            throw new Error("User already registered");
        }
        const _account_type = account_type || "dormant"; 
        const hashedPassword = crypto
            .createHash('sha256') 
            .update(password)
            .digest('hex');

        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            account_type: _account_type,
            fullname
        });

        if (user) {
            return res.status(201)
                .json({
                    message: "Registration Successful",
                    success:true,
                    user
                });
        } else {
            res.status(400);
            throw new Error("Registration Failed");
        }
    }
);

// Method POST
// Endpoint {baseurl}/auth/login
// desc login and authenticate user

const loginUser = asyncHandler(
    async (req, res, next) => {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400);
            throw new Error("Email and password are required!");
        }

        const user = await User.findOne({ email });

        if (!user) {
            res.status(401);
            throw new Error("Invalid email or password");
        }

        const hashedPassword = crypto
            .createHash('sha256')  
            .update(password)
            .digest('hex');

        if (hashedPassword === user.password) {
            const accessToken = jwt.sign(
                {
                    user:{
                        id:user.id,
                        email:user.email,
                        username: user.username,
                        role: user.role
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                {
                    expiresIn: "30d"
                }
            )
            return res.status(200).json({
                title: "Login Successful",
                message: "User loged in with success",
                devNote: "Store this token to access secured endpoints",
                accessToken
            });
        } else {
            // Passwords do not match, authentication failed
            res.status(401);
            throw new Error("Invalid email or password");
        }
    }
);

// Method POST
// Endpoint {baseurl}/auth/validate-token
// desc validate the access token and return the user details

const currentUser = asyncHandler(
    async(req, res, next) => {
        const user = req.user;
        return res.status(200)
        .json({user})
    }
)

module.exports = {
    registerUser,
    loginUser,
    currentUser
};
