"use strict";
const User = require("../models/user");
const cloudinary = require("../config/cloudinary");

exports.findAll = function (req, res) {
  User.findAll(function (err, user) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", user);
    res.send(user);
  });
};

exports.findById = function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.login = function (req, res) {
  User.login(req.params.email, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.create = function (req, res) {
  const new_user = new User(req.body);
  //handles null error

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    User.create(new_user, function (err, user) {
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
  User.delete(req.params.id, function (err, user) {
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
    User.update(req.params.id, new User(req.body), function (err, user) {
      if (err) res.send(err);
      res.json({ message: "User successfully updated" });
    });
  }
};

exports.edit = async function (req, res) {
  try {
    var new_user;

    if (req.body.user_img[0] === "h") {
      new_user = new User({
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_password: req.body.user_password,
        user_address: req.body.user_address,
        user_type: req.body.user_type,
        user_img: req.body.user_img,
      });
    }
    if (req.body.user_img[0] === "") {
      new_user = new User({
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_password: req.body.user_password,
        user_address: req.body.user_address,
        user_type: req.body.user_type,
        user_img: req.body.user_img,
      });
    } else {
      const img = await cloudinary.v2.uploader.upload(req.body.user_img, {
        folder: "user/",
      });
      console.log("test :", img);
      new_user = new User({
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_password: req.body.user_password,
        user_address: req.body.user_address,
        user_type: req.body.user_type,
        user_img: img.url,
      });
    }
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res
        .status(400)
        .send({ error: true, message: "Please provide all required field" });
    } else {
      await User.edit(req.params.id, new_user, function (err, user) {
        if (err) res.send(err);
        res.json({ message: "User successfully updated" });
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.type = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    User.type(req.params.id, new User(req.body), function (err, user) {
      if (err) res.send(err);
      res.json({ message: "User successfully updated" });
    });
  }
};
