"use strict";
const Shop = require("../models/shop");

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

exports.create = function (req, res) {
  const new_shop = new Shop(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Shop.create(new_shop, function (err, shop) {
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
