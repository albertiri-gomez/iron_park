const mongoose = require("mongoose");

const parkSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Name is required"
    },
    transport: {
      type: String
    },
    description: {
      type: String
    },
    owner: { type: mongoose.Types.ObjectId, ref: "User" },
    location: {
      type: { type: String, default: "Point" },
      coordinates: {
        type: [Number],
        required: false
      }
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
