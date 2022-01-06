const db = require("../config/mysql");
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  // res.send('Error');
  db.query("SELECT * FROM user", function (err, rows) {
    if (err) {
      throw err;
    }
    console.log(rows);
    res.json(rows);
  });
});

module.exports = router;
