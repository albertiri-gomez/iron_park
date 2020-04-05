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

router.use("/auth", auth);

router.use(isLoggedIn());

router.use("/park", park);
router.use("/dog", dog);

module.exports = router;
