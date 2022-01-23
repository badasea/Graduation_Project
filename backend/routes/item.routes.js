const express = require("express");
const router = express.Router();

const ItemController = require("../controllers/item.controller");

router.get("/", ItemController.findAll);
router.get("/:id", ItemController.findById);
router.get("/shop/:id", ItemController.findById_Shop);
router.post("/", ItemController.create);
router.delete("/:id", ItemController.delete);
router.put("/:id", ItemController.update);

module.exports = router;
