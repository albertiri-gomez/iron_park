const express = require("express");
const router = express.Router();
const Park = require("../models/Park");

// to see raw data in your browser, just go on: http://localhost:3000/api
router.get("/", (req, res, next) => {
  Park.find({}, (error, parkLocDB) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json({
        parks: parkLocDB
      });
    }
  });
});

// to see raw data in your browser, just go on: http://localhost:3000/api/someIdHere
router.get("/:id", (req, res, next) => {
  let parkId = req.params.id;
  Park.findOne(
    {
      _id: parkId
    },
    (error, oneParkLocDB) => {
      if (error) {
        next(error);
      } else {
        res.status(200).json({
          park: oneParkLocDB
        });
      }
    }
  );
});

module.exports = router;
