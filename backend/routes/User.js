const express = require("express");
const router = express.Router();

// const UserController = require("../controllers/UserController");

// router.get("/user", UserController.list);
// router.post("/add", customerController.save);
// router.get("/update/:id", customerController.edit);
// router.post("/update/:id", customerController.update);
// router.get("/delete/:id", customerController.delete);

router.get("/user", function (req, res) {
  res.send("Hello /market/1");
});

module.exports = router;
