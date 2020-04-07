const express = require("express");
const Comment = require("../models/Comment");
const Dog = require("../models/Dog");
const Park = require("../models/Park");

const router = express.Router();

router.post("/:parkId", (req, res, next) => {
  const newComment = new Comment(req.body);
  newComment
    .save()
    .then((comment) => {
      Park.findOneAndUpdate(
        { _id: req.params.parkId },
        { $push: { comments: comment._id } },
        { new: true }
      ).then((movie) => {
        res.json(movie);
      });
    })
    .catch((err) => res.status(500).json(err));
});

router.post("/:dogId", (req, res, next) => {
  const newComment = new Comment(req.body);
  newComment
    .save()
    .then((comment) => {
      Dog.findOneAndUpdate(
        { _id: req.params.dogId },
        { $push: { comments: comment._id } },
        { new: true }
      ).then((movie) => {
        res.json(movie);
      });
    })
    .catch((err) => res.status(500).json(err));
});

router.put("/:parkId", isLoggedIn(), async (req, res, next) => {
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
router.put("/:dogId", isLoggedIn(), async (req, res, next) => {
  try {
    const { id } = req.params;
    await Dog.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    return res.json({ status: "Edit comment Park" });
  } catch (error) {
    return res.status(401).json({ status: "Not Found" });
  }
});
module.exports = router;
