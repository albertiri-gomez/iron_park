const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../lib/isLoggedMiddleware");
const Meeting = require("../models/Meeting");
const mongoose = require("mongoose");

/*CREATE*/
router.post("/meeting", isLoggedIn(), async (req, res, next) => {
  try {
    const { name, participants, time, date, description } = req.body;
    const newMeeting = await Meeting.create({
      user: req.user.id,
      park: req.body.park,
      name,
      participants,
      time,
      date,
      description
    });
    return res.json(newMeeting);
  } catch (error) {
    console.log(error);
  }
});

//get
router.get("/", isLoggedIn, (req, res, next) => {
  Meeting.find()
    .populate("user")
    .populate({ path: "comments", populate: { path: "author" } })
    .then(metting => {
      res.json(metting);
    })
    .catch(err => res.status(500).json(err));
});

/* EDIT */
router.put("/:id", isLoggedIn(), async (req, res, next) => {
  try {
    const { id } = req.params;
    await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true
    });
    return res.json({ status: "Edit Dog" });
  } catch (error) {
    return res.status(401).json({ status: "Not Found" });
  }
});

//delete
router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  Movie.findOneAndRemove({ _id: id })
    .then(() => res.json({ message: "Removed succesfully" }))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
