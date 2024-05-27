function checkForMissingFields(requiredFields) {
    return (req, res, next) => {
        const missingFields = [];
        requiredFields.forEach(field => {
            // Check if the field is missing or empty
            if (!req.body.hasOwnProperty(field) || req.body[field] === null || req.body[field] === undefined || req.body[field] === '') {
                missingFields.push(field);
            }
        });

        if (missingFields.length > 0) {
            return res.status(400).json({
                success: false,
                message: `Missing fields: ${missingFields.join(', ')}`
            });
        }

        next();
    };
}

module.exports = checkForMissingFields;
