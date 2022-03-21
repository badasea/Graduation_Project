const express = require("express");
const router = express.Router();

const ShopController = require("../controllers/shop.controller");

router.get("/", ShopController.findAll);
router.get("/:id", ShopController.findById);
router.get("/user/:id", ShopController.findById2);

router.get("/jongno/:id", ShopController.findJongno);
router.get("/seongbuck/:id", ShopController.findSeongbuk);
router.get("/yeongdeungpo/:id", ShopController.findYeongdeungpo);

router.get("/count/:id", ShopController.findcount);
router.get("/count2/:id", ShopController.findcount2);

router.post("/", ShopController.create);
router.delete("/:id", ShopController.delete);
router.put("/:id", ShopController.update);

module.exports = router;
