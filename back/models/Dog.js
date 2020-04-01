const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dogSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },

    Name: string,

    Race: string,

    Description: string,

    comment: String
  },

  {
    timestamps: true
  }
);

const Dog = mongoose.model("dog", dogSchema);

module.exports = Dog;
