const express = require("express");
const router = express.Router();

const OrderController = require("../controllers/order.controller");

router.get("/", OrderController.findAll);
router.get("/:id", OrderController.findById);
router.get("/user/:id", OrderController.findUserok);
router.get("/find/:id", OrderController.findByUser);

router.get("/cart/:id", OrderController.findByCart);

router.post("/", OrderController.create);
router.delete("/:id", OrderController.delete);
router.put("/:id", OrderController.update);
router.put("/ok/:id", OrderController.ok);
router.post("/cartok/:id", OrderController.cartok);

module.exports = router;
