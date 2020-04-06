const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../lib/isLoggedMiddleware");
const Meeting = require("../models/Meeting");
const mongoose = require("mongoose");

//get
router.get("/", isLoggedIn, (req, res, next) => {
  Meeting.find()
    .populate("user")
    .populate("park")
    .populate({ path: "comments", populate: { path: "author" } })
    .then(metting => {
      res.json(metting);
    })
    .catch(err => res.status(500).json(err));
});

/*CREATE*/
router.post("/", isLoggedIn(), async (req, res, next) => {
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

/* EDIT */
router.put("/:id", isLoggedIn(), async (req, res, next) => {
  try {
    const { id } = req.params;
    await Meeting.findOneAndUpdate({ _id: id }, req.body, {
      new: true
    });
    return res.json({ status: "Edit meeting" });
  } catch (error) {
    return res.status(401).json({ status: "Not Found" });
  }
});

// DELETE
router.delete("/:id", isLoggedIn, (req, res, next) => {
  const { id } = req.params;
  Meeting.findOneAndRemove({ _id: id })
    .then(() => res.json({ message: "Removed succesfully" }))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
