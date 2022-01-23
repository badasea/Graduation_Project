const express = require("express");
const router = express.Router();

const ShopController = require("../controllers/shop.controller");

router.get("/", ShopController.findAll);
router.get("/:id", ShopController.findById);
router.post("/", ShopController.create);
router.delete("/:id", ShopController.delete);
router.put("/:id", ShopController.update);

module.exports = router;
