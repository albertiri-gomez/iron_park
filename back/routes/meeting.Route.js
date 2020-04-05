const express = require("express");
const router = express.Router();
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");
const ensureLogin = require("connect-ensure-login");
const User = require("../models/User");
const Park = require("../models/Park");
const Meeting = require("../models/Metting");
const mongoose = require("mongoose");

router.post("/meeting", async (req, res, next) => {
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
