const express = require("express");
const router = express.Router();
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");
const ensureLogin = require("connect-ensure-login");
const User = require("../models/User");
const Park = require("../models/Park");
const Review = require("../models/Reviews");
const mongoose = require("mongoose");
const Utils = require("../lib/utils");

// new review
router.post("/review", async (req, res, next) => {
  try {
    const { starts = 0, comment } = req.body;
    await Review.create({
      user: mongoose.Types.ObjectId(req.user.id),
      park: mongoose.Types.ObjectId(req.body.park),
      rates: {
        starts
      },
      comment
    });
    return res.json(`${req.body.park}`);
  } catch (error) {
    console.log(error);
  }
});

// API that serves the name of all the park
router.post("/get-names", async (req, res, next) => {
  try {
    const parks = await Park.aggregate([
      {
        $project: {
          _id: 0,
          name: 1
        }
      }
    ]);
    return res.json(parks);
  } catch (error) {
    console.log(error);
  }
});

// park details
router.get("/:id", (req, res, next) => {
  Park.findById(req.params.id)
    .then(async park => {
      const reviews = await Review.find({
        park
      })
        .populate("user")
        .sort({
          createdAt: -1
        });
      const savedFavorite = isparkFavorite(req.user, park._id);
      return res.json("park", {
        park,
        reviews,
        savedFavorite
      });
    })
    .catch(error => {
      console.log(error);
      next();
    });
});

module.exports = router;
