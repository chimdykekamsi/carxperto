const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const fs = require('fs');

// Configure Cloudinary with your credentials
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadImagesToCloudinary = async (req, res, next) => {
    try {
        const image = req.file; 
        if(!image){
            res.status(400);
            throw new Error("Image not found");
        }
        const result = await cloudinary.uploader.upload(image.path, {folder: "carxperto"});
        result.url = result.secure_url
        

        req.body.image = result;
        const filePath = image.path;
        fs.unlinkSync(filePath);
        next();

    

    } catch (error) {
        const statusCode = res.statusCode ? res.statusCode : 500;
        return res.status(statusCode).json({
            success: false,
            message: error.message,
            stackTrace: error.stack
        });
    }
};

const deleteImagesFromCloudinary =  (images) => {
    const assets = images.map((image) => {
        // Ensure the image and its URL are defined
        if (image && image.url) {
            // Extract the public ID from the URL
            const url = new URL(image.url);
            const pathSegments = url.pathname.split('/'); 
            const publicID = pathSegments.slice(5).join('/').replace(/\.\w+$/, '');
            return publicID;
        } else {
            console.log("Null image or missing URL.");
            return null;
        }
    });
    cloudinary.api
    .delete_resources(assets)
    .then(result=>{
        return result;
    })
    .catch(err =>{
        throw new Error("Post images failed to delete");
    })
};

 module.exports = {
    uploadImagesToCloudinary,
    deleteImagesFromCloudinary
 };