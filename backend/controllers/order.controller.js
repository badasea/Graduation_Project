"use strict";
const Order = require("../models/order");

exports.findAll = function (req, res) {
  Order.findAll(function (err, user) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", user);
    res.send(user);
  });
};

exports.findById = function (req, res) {
  Order.findById(req.params.id, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.findByUser = function (req, res) {
  Order.findByUser(req.params.id, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.findUserok = function (req, res) {
  Order.findUserok(req.params.id, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};
exports.findShopok = function (req, res) {
  Order.findShopok(req.params.id, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.findOrder = function (req, res) {
  Order.findOrder(req.params.id, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.findChart1 = function (req, res) {
  Order.findChart1(req.params.id, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.findChart2 = function (req, res) {
  Order.findChart2(req.params.id, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.findmonthsales = function (req, res) {
  Order.findmonthsales(req.params.id, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.findhit = function (req, res) {
  Order.findhit(req.params.id, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.findByCart = function (req, res) {
  Order.findByCart(req.params.id, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.create = function (req, res) {
  const new_user = new Order(req.body);
  //handles null error

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Order.create(new_user, function (err, user) {
      if (err) {
        res.send(err);
        return;
      } else {
        res.json({
          data: user,
        });
      }
    });
  }
};

exports.delete = function (req, res) {
  Order.delete(req.params.id, function (err, user) {
    if (err) res.send(err);
    res.json({ message: "User successfully deleted" });
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Order.update(req.params.id, new Order(req.body), function (err, user) {
      if (err) res.send(err);
      res.json({ message: "User successfully updated" });
    });
  }
};

exports.cartok = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Order.cartok(req.params.id, new Order(req.body), function (err, user) {
      if (err) res.send(err);
      res.json({ message: "User successfully updated" });
    });
  }
};

exports.ok = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Order.ok(req.params.id, new User(req.body), function (err, user) {
      if (err) res.send(err);
      res.json({ message: "User successfully updated" });
    });
  }
};
