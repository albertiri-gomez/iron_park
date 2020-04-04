const express = require("express");
const router = express.Router();
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");
const ensureLogin = require("connect-ensure-login");
const User = require("../models/User");
const Park = require("../models/Park");
const Dog = require("../models/Dog");
const Metting = require("../models/Metting");

const mongoose = require("mongoose");

router.post("/meeting", async (req, res, next) => {
  try {
    const { comment, description } = req.body;
    const newDog = await Dog.create({
      user: mongoose.Types.ObjectId(req.user.id),
      park: mongoose.Types.ObjectId(req.body.park),
      description,
      comment,
      image
    });
    return res.json(newDog);
  } catch (error) {
    console.log(error);
  }
});

/* EDIT */
router.post("dog/edit", isLoggedIn(), async (req, res, next) => {
  try {
    const id = req.user._id;
    const { dogName, race, image, description, comment } = req.body;
    await Users.findByIdAndUpdate(id, {
      dogName,
      race,
      image,
      description,
      comment
    });
    return res.json({ status: "Edit Dog" });
  } catch (error) {
    return res.status(401).json({ status: "Not Found" });
  }
});

// Upload file
router.post("/dog/upload", async (req, res, next) => {
  try {
    const { file } = req.body;
    res.json(`User updated ${file}`);
  } catch (error) {
    console.log(error);
  }
});

router.get("/dog/:id", (req, res, next) => {
  Dog.findById(req.params.id)
    .then(async dog => {
      const dogs = await Dog.find({
        dog
      })
        .populate("user")
        .sort({
          createdAt: -1
        });
      return res.json("dog", {
        dogs
      });
    })
    .catch(error => {
      console.log(error);
      next();
    });
});
