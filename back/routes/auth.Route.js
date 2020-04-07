const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Dog = require("../models/Dog");
const _ = require("lodash");
const passport = require("passport");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

// SIGNUP
router.post("/signup", isLoggedOut(), async (req, res, next) => {
  const { username, email, password, hasDog, dogName } = req.body;
  // console.log(username, password);
  // Create the user
  const existingUser = await User.findOne({ username });
  if (!existingUser) {
    const newUser = await User.create({
      username,
      email,
      password
    });
    // console.log(newUser);
    if (hasDog === true) {
      const newDog = await Dog.create({
        dogName,
        user: newUser._id
      });
      console.log(newDog);
    }
    // Directly login user
    req.logIn(newUser, err => {
      res.json(_.pick(req.user, ["username", "_id", "createdAt", "updatedAt"]));
    });
    console.log(username, "register");
  } else {
    res.json({ status: "User Exist" });
  }
});

//LOGIN
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, failureDetails) => {
    if (err) {
      console.log(err);
      return res.json({ status: 500, message: "Authentication Error" });
    }
    console.log(user);
    if (!user) {
      return res.json({ status: 401, message: failureDetails.message });
    }
    req.login(user, err => {
      if (err) {
        return res.status(500).json({ message: "Session not saved" });
      }
      return res.json(
        _.pick(req.user, ["username", "_id", "createdAt", "updatedAt"])
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

/* EDIT ONE */
router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  User.findOne({ _id: id })
    .then(user => {
      res.json(user);
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
