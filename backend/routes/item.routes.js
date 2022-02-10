const express = require("express");
const router = express.Router();

const ItemController = require("../controllers/item.controller");

router.get("/", ItemController.findShop);
router.get("/:id", ItemController.findById);
router.get("/item/:id", ItemController.findId);

// router.get("/shop", ItemController.findShop);
router.post("/", ItemController.create);
router.delete("/:id", ItemController.delete);
router.put("/:id", ItemController.update);

module.exports = router;
