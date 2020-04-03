const mongoose = require("mongoose");

const parkSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Name is required"
    },
    // owner: { type: mongoose.Types.ObjectId, ref: "User" },
    address: {
      locality: String,
      postalCode: String,
      streetAddress: String
    },
    description: {
      type: String
    },
    location: {
      latitude: Number,
      longitude: Number
    },
    image: {
      type: String
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
        return ret;
      }
    }
  }
);

const Park = mongoose.model("Park", parkSchema);

module.exports = Park;
