const express = require("express");
const router = express.Router();

const OrderController = require("../controllers/order.controller");

router.get("/", OrderController.findShop);
router.get("/:id", OrderController.findById);
router.post("/", OrderController.create);
router.delete("/:id", OrderController.delete);
router.put("/:id", OrderController.update);

module.exports = router;
