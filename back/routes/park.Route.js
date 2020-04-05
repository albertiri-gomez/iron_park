const express = require("express");
const router = express.Router();
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");
const ensureLogin = require("connect-ensure-login");
const User = require("../models/User");
const Park = require("../models/Park");
const Comment = require("../models/Comment");
const mongoose = require("mongoose");
const isparkFavorite = require("../lib/utils/isParkFavorite");

// // new review
// router.post("/review", async (req, res, next) => {
//   try {
//     const { starts = 0, comment } = req.body;
//     await Review.create({
//       user: mongoose.Types.ObjectId(req.user.id),
//       park: mongoose.Types.ObjectId(req.body.park),
//       rates: {
//         starts
//       },
//       comment
//     });
//     return res.json(`${req.body.park}`);
//   } catch (error) {
//     console.log(error);
//   }
// });

// park details
router.get("/:id", (req, res, next) => {
  Park.findById(req.params.id)
    .then(async park => {
      const comment = await Comment.find({
        park
      })
        .populate("user")
        .sort({
          createdAt: -1
        });
      const savedFavorite = isparkFavorite(req.user, park._id);
      return res.json("park", {
        park,
        comment,
        savedFavorite
      });
    })
    .catch(error => {
      console.log(error);
      next();
    });
});

module.exports = router;
