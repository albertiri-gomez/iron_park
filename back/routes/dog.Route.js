const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../lib/isLoggedMiddleware");
const Dog = require("../models/Dog");
const mongoose = require("mongoose");
const uploadCloudinaryAvatar = require("../middleware/uploader");

// router.get("/", isLoggedIn, async (req, res, next) => {
//   await Dog.find().populate("user");
//   // .populate({ path: "comments", populate: { path: "author" } });
//   return res.json({ status: "Edit Dog" });
// });

//get dog
router.get("/", isLoggedIn(), (req, res, next) => {
  Dog.find()
    .populate("user")
    .then((dog) => {
      res.json(dog);
    })
    .catch((err) => res.status(500).json(err));
});

// router.post("/profilepic", async (req, res) => {
//   console.log(req.file);
//   const user = req.user;

//   // if there was previous profile pic, delete it

//   // Set the new profile pic
//   user.profilePic = req.file;
//   const updatedUser = await user.save();

//   return res.json({ status: "Uploaded completed", user: updatedUser });
// });

//create dog
router.post(
  "/",
  uploadCloudinaryAvatar.single("image"),
  async (req, res, next) => {
    console.log(req.body);
    console.log(req.file);
    try {
      const { description, dogName, race } = req.body;
      const newDog = await Dog.create({
        user: req.user._id,
        dogName,
        race,
        description,
        image: req.file,
      });
      return res.json(newDog);
    } catch (error) {
      console.log(error);
    }
  }
);

/* EDIT */
router.put("/:id", isLoggedIn(), async (req, res, next) => {
  try {
    const { id } = req.params;
    await Dog.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    return res.json({ status: "Edit Dog" });
  } catch (error) {
    return res.status(401).json({ status: "Not Found" });
  }
});

router.post("/whoami", (req, res, next) => {
  if (req.user)
    return res.json(
      _.pick(req.user, [
        "image",
        "_id",
        "description",
        "dogName",
        "race",
        "createdAt",
        "updatedAt",
      ])
    );
  else return res.status(401).json({ status: "No user session present" });
});

module.exports = router;
