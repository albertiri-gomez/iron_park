const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../lib/isLoggedMiddleware");
const Dog = require("../models/Dog");
const mongoose = require("mongoose");

// router.get("/", isLoggedIn, async (req, res, next) => {
//   await Dog.find()
//     .populate("user")
//     .populate({ path: "comments", populate: { path: "author" } });
//   return res.json({ status: "Edit Dog" });
// });

//get dog
router.get("/", isLoggedIn, (req, res, next) => {
  Dog.find()
    .populate("user")
    .populate({ path: "comments", populate: { path: "author" } })
    .then(dog => {
      res.json(dog);
    })
    .catch(err => res.status(500).json(err));
});

//create dog
router.post("/", async (req, res, next) => {
  try {
    const { description, image, dogName, race } = req.body;
    const newDog = await Dog.create({
      user: mongoose.Types.ObjectId(req.user.id),
      dogName,
      race,
      description,
      image
    });
    return res.json(newDog);
  } catch (error) {
    console.log(error);
  }
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

// // Upload file
// router.post("/dog/upload", async (req, res, next) => {
//   try {
//     const { file } = req.body;
//     res.json(`User updated ${file}`);
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = router;
