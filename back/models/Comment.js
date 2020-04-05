const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    park: { type: Schema.Types.ObjectId, ref: "Park" },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    content: { type: String },
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

const Comment = mongoose.model("Review", commentSchema);

module.exports = Comment;
