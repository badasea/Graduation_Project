const express = require("express");
const router = express.Router();

const ShopController = require("../controllers/shop.controller");

router.get("/", ShopController.findAll);
router.get("/:id", ShopController.findById);
router.get("/user/:id", ShopController.findById2);

router.get("/jongno/:id", ShopController.findByjongno);
router.get("/seongbuck/:id", ShopController.findByseongbuck);
router.get("/yeongdeungpo/:id", ShopController.findByyeongdeungpo);

router.get("/craftshop/:id", ShopController.findBycraftshop);
router.get("/etc/:id", ShopController.findByetc);
router.get("/food/:id", ShopController.findByfood);
router.get("/hanbok/:id", ShopController.findByhanbok);

router.post("/", ShopController.create);
router.delete("/:id", ShopController.delete);
router.put("/:id", ShopController.update);

module.exports = router;
