const moongose = require("moongose");

const mettingSchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    park: { type: Schema.Types.ObjectId, ref: "Park" },
    name: {
      type: String,
      require: true
    },
    participants: {
      type: Number,
      default: 0
    },
    description: {
      type: String
    },
    time: {
      type: Number
    },
    date: {
      type: Date
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

const Metting = mongoose.model("Metting", mettingSchema);

module.exports = Metting;
