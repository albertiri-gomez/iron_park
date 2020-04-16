const multer = require("multer");
const cloudinaryStorage = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary");
const _ = require("lodash");

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "ironpark",
  allowedFormats: ["jpg", "png"],
  filename: function (req, file, cb) {
    const userID = _.get(req, "user._id");
    const userFile = userID ? `avatar${userID}` : file;
    cb(undefined, userFile);
  },
});

module.exports = uploadCloudinaryAvatar = multer({ storage });

// export const upload = multer({ dest: "ironpark/" });
