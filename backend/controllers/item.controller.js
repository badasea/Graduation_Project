"use strict";
const Item = require("../models/item");
const cloudinary = require("../config/cloudinary");

exports.findAll = function (req, res) {
  Item.findAll(function (err, item) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", item);
    res.send(item);
  });
};

exports.findfood = function (req, res) {
  Item.findfood(req.params.id, function (err, item) {
    if (err) res.send(err);
    res.json(item);
  });
};
exports.findhanbok = function (req, res) {
  Item.findhanbok(req.params.id, function (err, item) {
    if (err) res.send(err);
    res.json(item);
  });
};
exports.findcraftshop = function (req, res) {
  Item.findcraftshop(req.params.id, function (err, item) {
    if (err) res.send(err);
    res.json(item);
  });
};
exports.findetc = function (req, res) {
  Item.findetc(req.params.id, function (err, item) {
    if (err) res.send(err);
    res.json(item);
  });
};

exports.findById = function (req, res) {
  Item.findById(req.params.id, function (err, item) {
    if (err) res.send(err);
    res.json(item);
  });
};

exports.findItemId = function (req, res) {
  Item.findItemId(req.params.id, function (err, item) {
    if (err) res.send(err);
    res.json(item);
  });
};

exports.findManage = function (req, res) {
  Item.findManage(req.params.id, function (err, item) {
    if (err) res.send(err);
    res.json(item);
  });
};

exports.findId = function (req, res) {
  Item.findId(req.params.id, function (err, item) {
    if (err) res.send(err);
    res.json(item);
  });
};

exports.create = async function (req, res) {
  const img = await cloudinary.v2.uploader.upload(req.body.item_img, {
    folder: "item/",
    width: 4032,
    height: 3024,
  });
  console.log("test :", img);

  const new_item = new Item({
    item_name: req.body.item_name,
    item_content: req.body.item_content,
    item_price: req.body.item_price,
    item_stock: req.body.item_stock,
    item_img: img.url,
    shop_id: req.body.shop_id,
  });
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    await Item.create(new_item, function (err, item) {
      if (err) {
        res.send(err);
        return;
      } else {
        res.json({
          data: item,
        });
      }
    });
  }
};

exports.delete = function (req, res) {
  Item.delete(req.params.id, function (err, shop) {
    if (err) res.send(err);
    res.json({ message: "Item successfully deleted" });
  });
};

exports.update = async function (req, res) {
  try {
    var new_item;
    if (req.body.item_img[0] === "h") {
      new_item = new Item({
        item_name: req.body.item_name,
        item_content: req.body.item_content,
        item_price: req.body.item_price,
        item_stock: req.body.item_stock,
        item_img: req.body.item_img,
        shop_id: req.body.shop_id,
      });
    } else {
      const img = await cloudinary.v2.uploader.upload(req.body.item_img, {
        folder: "item/",
        width: 4032,
        height: 3024,
      });

      new_item = new Item({
        item_name: req.body.item_name,
        item_content: req.body.item_content,
        item_price: req.body.item_price,
        item_stock: req.body.item_stock,
        item_img: img.url,
        shop_id: req.body.shop_id,
      });
    }

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res
        .status(400)
        .send({ error: true, message: "Please provide all required field" });
    } else {
      await Item.update(req.params.id, new_item, function (err, shop) {
        if (err) res.send(err);
        res.json({ message: "Item successfully updated" });
      });
    }
  } catch (err) {
    console.log(err);
  }
};
