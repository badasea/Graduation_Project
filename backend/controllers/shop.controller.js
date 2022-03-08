"use strict";
const Shop = require("../models/shop");
const cloudinary = require("../config/cloudinary");

exports.findAll = function (req, res) {
  Shop.findAll(function (err, shop) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", shop);
    res.send(shop);
  });
};

exports.findById = function (req, res) {
  Shop.findById(req.params.id, function (err, shop) {
    if (err) res.send(err);
    res.json(shop);
  });
};

exports.findById2 = function (req, res) {
  Shop.findById2(req.params.id, function (err, shop) {
    if (err) res.send(err);
    res.json(shop);
  });
};

// 지역
exports.findByjongno = function (req, res) {
  Shop.findByjongno(req.params.id, function (err, shop) {
    if (err) res.send(err);
    res.json(shop);
  });
};

exports.findByseongbuck = function (req, res) {
  Shop.findByseongbuck(req.params.id, function (err, shop) {
    if (err) res.send(err);
    res.json(shop);
  });
};

exports.findByyeongdeungpo = function (req, res) {
  Shop.findByyeongdeungpo(req.params.id, function (err, shop) {
    if (err) res.send(err);
    res.json(shop);
  });
};

// 업종
exports.findByhanbok = function (req, res) {
  Shop.findByhanbok(req.params.id, function (err, shop) {
    if (err) res.send(err);
    res.json(shop);
  });
};

exports.findByetc = function (req, res) {
  Shop.findByetc(req.params.id, function (err, shop) {
    if (err) res.send(err);
    res.json(shop);
  });
};

exports.findByfood = function (req, res) {
  Shop.findByfood(req.params.id, function (err, shop) {
    if (err) res.send(err);
    res.json(shop);
  });
};

exports.findBycraftshop = function (req, res) {
  Shop.findBycraftshop(req.params.id, function (err, shop) {
    if (err) res.send(err);
    res.json(shop);
  });
};

// 등록
exports.create = async function (req, res) {
  try {
    const img = await cloudinary.v2.uploader.upload(req.body.shop_image, {
      folder: "shop/",
      width: 4032,
      height: 3024,
    });
    console.log("test :", img);

    const new_shop = new Shop({
      shop_name: req.body.shop_name,
      shop_registration_num: req.body.shop_registration_num,
      shop_business_type: req.body.shop_business_type,
      shop_phone: req.body.shop_phone,
      shop_region: req.body.shop_region,
      shop_address: req.body.shop_address,
      shop_detail_address: req.body.shop_detail_address,
      shop_image: img.url,
      shop_content: req.body.shop_content,
      user_id: req.body.user_id,
    });

    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res
        .status(400)
        .send({ error: true, message: "Please provide all required field" });
    } else {
      await Shop.create(new_shop, function (err, shop) {
        if (err) {
          res.send(err);
          return;
        } else {
          res.json({
            data: shop,
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.delete = function (req, res) {
  Shop.delete(req.params.id, function (err, shop) {
    if (err) res.send(err);
    res.json({ message: "Shop successfully deleted" });
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Shop.update(req.params.id, new Shop(req.body), function (err, shop) {
      if (err) res.send(err);
      res.json({ message: "Shop successfully updated" });
    });
  }
};
