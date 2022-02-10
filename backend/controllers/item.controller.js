"use strict";
const Item = require("../models/item");

exports.findAll = function (req, res) {
  Item.findAll(function (err, item) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", item);
    res.send(item);
  });
};

exports.findById = function (req, res) {
  Item.findById(req.params.id, function (err, item) {
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

exports.findShop = function (req, res) {
  Item.findShop(function (err, item) {
    if (err) res.send(err);
    console.log("res", item);
    res.send(item);
  });
};

exports.create = function (req, res) {
  const new_item = new Item(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Item.create(new_item, function (err, item) {
      if (err) res.send(err);
      res.json({
        data: item,
      });
    });
  }
};

exports.delete = function (req, res) {
  Item.delete(req.params.id, function (err, shop) {
    if (err) res.send(err);
    res.json({ message: "Item successfully deleted" });
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Item.update(req.params.id, new Item(req.body), function (err, shop) {
      if (err) res.send(err);
      res.json({ message: "Item successfully updated" });
    });
  }
};
