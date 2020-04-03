require("dotenv").config();
const User = require("../models/User");
const Park = require("../models/Park");
const Reviews = require("../models/Reviews");
const mongoose = require("mongoose");

const randomNum = n => Math.round(Math.random() * n);
let totalReviews = 0;

const writeReviews = async () => {
  await mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  try {
    let users = await User.find();
    let parks = await Park.find();

    for (park of parks) {
      const randomRates = [randomNum(5)];

      let review = {
        user: users[randomNum(users.length - 1)].id,
        park: park.id,
        rates: {
          starts: randomRates[0]
        },
        comment: ""
      };

      if (Math.round(Math.random()) === 0) {
        try {
          await Reviews.create(review);
          console.log(`${park.name} review added`);
          totalReviews++;
        } catch (error) {
          console.log(error);
        }
      }
    }
    console.log(`${totalReviews} reviews were created`);
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.disconnect();
  }
};

writeReviews();
