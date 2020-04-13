const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dogSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    park: { type: Schema.Types.ObjectId, ref: "Park" },

    dogName: {
      type: String,
      require: true,
    },
    race: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
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
      },
    },
  }
);

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
