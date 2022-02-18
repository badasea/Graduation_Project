const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");

router.get("/", UserController.findAll);
router.get("/:id", UserController.findById);
router.get("/login/:email", UserController.login);
router.post("/", UserController.create);
router.delete("/:id", UserController.delete);
// router.post("/:id", UserController.update);
router.post("/:id", UserController.edit);
router.put("/shop/:id", UserController.type);

module.exports = router;
