const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dogSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    dogName: {
      type: String,
      require: true
    },
    race: {
      type: String
    },
    description: {
      type: String
    },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],

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

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
