const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    park: { type: Schema.Types.ObjectId, ref: "Park" },
    comment: {
      type: String
    },
    rates: {
      stars: { type: Number, default: 0, require: true }
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret.__v;
        return ret;
      }
    }
  }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
