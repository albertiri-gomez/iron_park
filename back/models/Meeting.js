const mongoose = require("mongoose");

const mettingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "User" },
    park: { type: mongoose.Types.ObjectId, ref: "Park" },
    nameMeeting: {
      type: String,
      require: true,
    },
    participants: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
    },
    time: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    image: {
      type: Object,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

const Meetting = mongoose.model("Meeting", mettingSchema);

module.exports = Meetting;
