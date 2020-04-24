const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../lib/isLoggedMiddleware");
const Park = require("../models/Park");
const isparkFavorite = require("../lib/utils/isParkFavorite");

router.get("/", isLoggedIn(), (req, res, next) => {
  Park.find()
    .populate("user")
    .populate("comments")
    .populate({ path: "comments", populate: { path: "author" } })
    .then((park) => {
      res.json(park);
      // console.log("esto es park_res", park);
    })
    .catch((err) => res.status(500).json(err));
});

//Get one park
router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Park.findOne({ _id: id })
    .then((park) => {
      res.json(park);
    })
    .catch((err) => res.status(500).json(err));
});

/* EDIT */
router.put("/:id", isLoggedIn(), async (req, res, next) => {
  try {
    const { id } = req.params;
    await Park.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    return res.json({ status: "Edit comment Park" });
  } catch (error) {
    return res.status(401).json({ status: "Not Found" });
  }
});

module.exports = router;
