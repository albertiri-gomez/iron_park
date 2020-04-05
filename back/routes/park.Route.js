const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../lib/isLoggedMiddleware");
const Park = require("../models/Park");
const isparkFavorite = require("../lib/utils/isParkFavorite");

router.get("/", isLoggedIn, (req, res, next) => {
  Park.find()
    .populate("user")
    .populate({ path: "comments", populate: { path: "author" } })
    .then(park => {
      res.json(park);
    })
    .catch(err => res.status(500).json(err));
});

//Get one park
router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Park.findOne({ _id: id })
    .then(park => {
      res.json(park);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
