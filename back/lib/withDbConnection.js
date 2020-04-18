const mongoose = require("mongoose");
require("dotenv").config();
const { MongoError } = require("mongodb");

const DBURLHEROKU = process.env.DBURLHEROKU;

const dropIfExists = async (Model) => {
  try {
    await Model.collection.drop();
  } catch (e) {
    if (e instanceof MongoError) {
      console.log(
        `Cannot drop collection ${Model.collection.name}, because does not exist in DB`
      );
    } else {
      throw e;
    }
  }
};

const withDbConnection = async (fn, disconnectEnd = true) => {
  try {
    await mongoose.connect(DBURLHEROKU, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connection Ready on ${DBURLHEROKU}`);
    await fn();
  } catch (error) {
    console.log("ERROR");
    console.log(error);
  } finally {
    // Disconnect from database
    if (disconnectEnd) {
      await mongoose.disconnect();
      console.log("disconnected");
    }
  }
};

module.exports = { withDbConnection, dropIfExists };
