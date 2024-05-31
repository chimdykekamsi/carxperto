const User = require("../models/user.model");
// middlewares/checkAccountType.js
function checkAccountType(requiredAccountTypes) {
    return async(req, res, next) => {
        const {id} = req.user; 
        const user = await User.findById(id);
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            });
        }

        if (!requiredAccountTypes.includes(user.account_type)) {
            return res.status(403).json({
                success: false,
                message: "Forbidden: You do not have the required account type to access this resource"
            });
        }

        next();
    };
}

module.exports = checkAccountType;
