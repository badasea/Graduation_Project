const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");

router.get("/", UserController.findAll);
router.get("/:id", UserController.findById);
router.get("/login/:email", UserController.login);
router.post("/", UserController.create);
router.delete("/:id", UserController.delete);
router.put("/:id", UserController.update);

module.exports = router;
