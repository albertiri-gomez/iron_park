const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { hashPassword } = require("../lib/hashing");

const SALT_WORK_FACTOR = 10;
const IMAGE_URL = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|svg)/g;
const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PASSWORD_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Name is required"
    },
    email: {
      type: String,
      trim: true,
      match: [EMAIL_PATTERN, "Please fill a valid email address"],
      sparse: true,
      unique: false,
      default: null,
      lowercase: true
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      match: [PASSWORD_PATTERN, "Invalid password pattern"]
    }

    // avatar: {
    //   type: String,
    //   default: 'https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg',
    // },
    // social: {
    //   google: String,
    //   facebook: String,
    // }
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
        return ret;
      }
    }
  }
);

userSchema.pre("save", async function(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  user.password = await hashPassword(user.password);
  next();
});
const User = mongoose.model("User", userSchema);
module.exports = User;
