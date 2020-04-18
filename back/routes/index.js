const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../lib/isLoggedMiddleware");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({ status: "Welcome" });
});

const auth = require("./auth.Route");
const park = require("./park.Route");
const dog = require("./dog.Route");
const meeting = require("./meeting.Route");
const comment = require("./comments.Route");

router.use("/auth", auth);

router.use(isLoggedIn());

router.use("/parks", park);
router.use("/dogs", dog);
router.use("/meetings", meeting);
router.use("/comments", comment);

module.exports = router;
