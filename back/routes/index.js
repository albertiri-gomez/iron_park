const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../lib/isLoggedMiddleware");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({ status: "Welcome" });
});

const auth = require("./auth.Route");
// const park = require("./parkRoute");

router.use("/auth.Routes", auth);

router.use(isLoggedIn());

// router.use("/parkRoute", park);

module.exports = router;
