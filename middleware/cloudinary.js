const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: 'dwm7kuse2', 
  api_key: '555518227958399', 
  api_secret: 'ZulEsMtnTGDMjzSF-tF-Z6-jlag',
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "canteen",
  },
});

const upload = multer({ storage }).single("image");

module.exports = upload;
