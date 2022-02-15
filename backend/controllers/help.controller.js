"use strict";
const Help = require("../models/help");

exports.findAll = function (req, res) {
  Help.findAll(function (err, help) {
    console.log("controller");
    if (err) res.send(err);
    //console.log("res", item);
    res.send(help);
  });
};

exports.findById = function (req, res) {
  Help.findById(req.params.id, function (err, help) {
    if (err) res.send(err);
    res.json(help);
  });
};

exports.create = function (req, res) {
  const new_help = new Help(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Help.create(new_help, function (err, help) {
      if (err) {
        res.send(err);
        return;
      } else {
        res.json({
          data: help,
        });
      }
    });
  }
};

exports.delete = function (req, res) {
  Help.delete(req.params.id, function (err, help) {
    if (err) res.send(err);
    res.json({ message: "help successfully deleted" });
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Help.update(req.params.id, new Help(req.body), function (err, help) {
      if (err) res.send(err);
      res.json({ message: "help successfully updated" });
    });
  }
};
