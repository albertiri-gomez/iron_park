const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Dog = require("../models/Dog");
const _ = require("lodash");
const passport = require("passport");
const { hashPassword, checkHashed } = require("../lib/hashing");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

// SIGNUP
router.post("/signup", async (req, res, next) => {
  const { name, email, password, hasDog, dogName, race } = req.body;

  console.log(name, password);

  // Create the user
  const existingUser = await User.findOne({ name, email });
  if (!existingUser) {
    const newUser = await User.create({
      name,
      email,
      password
    });
    console.log(newUser);
    if (hasDog === true) {
      const newDog = await Dog.create({
        dogName,
        race,
        user: newUser._id
      });
    }
    // Directly login user
    req.logIn(newUser, err => {
      res.json(
        _.pick(req.user, ["name", "email", "_id", "createdAt", "updatedAt"])
      );
    });
    console.log(name, "register");
  } else {
    res.json({ status: "User Exist" });
  }
});

// LOGIN
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, failureDetails) => {
    if (err) {
      console.log(err);
      return res.json({ status: 500, message: "Authentication Error" });
    }

    if (!user) {
      return res.json({ status: 401, message: failureDetails.message });
    }

    req.login(user, err => {
      if (err) {
        return res.status(500).json({ message: "Session not saved" });
      }

      return res.json(
        _.pick(req.user, ["name", "email", "_id", "createdAt", "updatedAt"])
      );
    });
  })(req, res, next);
});

// LOGOUT
router.post("/logout", isLoggedIn(), async (req, res, next) => {
  if (req.user) {
    req.logout();
    return res.json({ status: "Log out" });
  } else {
    return res
      .status(401)
      .json({ status: "You have to be logged in to logout" });
  }
});

/* EDIT */
router.post("/edit", isLoggedIn(), async (req, res, next) => {
  try {
    const id = req.user._id;
    const { name, email, dogName, race } = req.body;
    await Users.findByIdAndUpdate(id, {
      name,
      email,
      dogName,
      race
    });
    return res.json({ status: "Edit Profile" });
  } catch (error) {
    return res.status(401).json({ status: "Not Found" });
  }
});

// WHOAMI
router.post("/whoami", (req, res, next) => {
  if (req.user)
    return res.json(
      _.pick(req.user, [
        "username",
        "_id",
        "email",
        "dogName",
        "race",
        "createdAt",
        "updatedAt"
      ])
    );
  else return res.status(401).json({ status: "No user session present" });
});

module.exports = router;
