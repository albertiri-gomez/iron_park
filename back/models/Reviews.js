const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },

    // dog: { type: Schema.Types.ObjectId, ref: "dog" },

    comment: String
  },

  {
    timestamps: true
  }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
