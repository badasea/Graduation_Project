const express = require("express");
const router = express.Router();

const OrderController = require("../controllers/order.controller");

router.get("/", OrderController.findAll);
router.get("/:id", OrderController.findById);
router.get("/user/:id", OrderController.findUserok);

router.get("/shop/:id", OrderController.findShopok);

router.get("/find/:id", OrderController.findByUser);

router.get("/cart/:id", OrderController.findByCart);
router.get("/owner/:id", OrderController.findOrder);
router.get("/chart1/:id", OrderController.findChart1);
router.get("/chart2/:id", OrderController.findChart2);

router.get("/monthsales/:id", OrderController.findmonthsales);
router.get("/hit/:id", OrderController.findhit);

router.post("/", OrderController.create);
router.delete("/:id", OrderController.delete);
router.put("/:id", OrderController.update);
router.put("/ok/:id", OrderController.ok);
router.post("/cartok/:id", OrderController.cartok);

module.exports = router;
