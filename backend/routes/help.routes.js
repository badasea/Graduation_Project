const express = require("express");
const router = express.Router();

const HelpController = require("../controllers/help.controller");

router.get("/", HelpController.findAll);
router.get("/:id", HelpController.findById);
router.post("/", HelpController.create);
router.delete("/:id", HelpController.delete);
router.post("/:id", HelpController.update);

module.exports = router;
