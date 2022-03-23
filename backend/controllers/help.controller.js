"use strict";
const Help = require("../models/help");

exports.findAll = function (req, res) {
  Help.findAll(function (err, user) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", user);
    res.send(user);
  });
};

exports.findById = function (req, res) {
  Help.findById(req.params.id, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.create = function (req, res) {
  const new_user = new Help(req.body);
  //handles null error

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Help.create(new_user, function (err, user) {
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
  Help.delete(req.params.id, function (err, user) {
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
    Help.update(req.params.id, new Help(req.body), function (err, user) {
      if (err) res.send(err);
      res.json({ message: "User successfully updated" });
    });
  }
};
