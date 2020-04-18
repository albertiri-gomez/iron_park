const multer = require("multer");
const cloudinaryStorage = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary");
const _ = require("lodash");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "ironpark",
  allowedFormats: ["jpg", "png"],
  filename: function (req, file, cb) {
    const userID = _.get(req, "user.id");
    const userFile = userID ? `ironpark ${userID}` : file;
    cb(undefined, userFile);
  },
});

module.exports = uploadCloudinaryAvatar = multer({ storage });

// export const upload = multer({ dest: "ironpark/" });
