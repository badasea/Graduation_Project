"use strict";

const mysql = require("../config/mysql");

let User = function (user) {
  this.user_id = user.user_id;
  this.user_name = user.user_name;
  this.user_email = user.user_email;
  this.user_password = user.user_password;
  this.user_address = user.user_address;
  this.user_type = user.user_type;
  this.user_img = user.user_img;
};

// 모든 사용자 검색
User.findAll = function (result) {
  mysql.query("Select * from user", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("employees : ", res);
      result(null, res);
    }
  });
};

// 특정 사용자 검색
User.findById = function (id, result) {
  mysql.query("Select * from user where user_id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

// 사용자 로그인
User.login = function (email, result) {
  mysql.query(
    "Select * from user where user_email = ? ",
    email,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

// 사용자 등록
User.create = function (newEmp, result) {
  mysql.query("INSERT INTO user set ?", newEmp, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

// 사용자 삭제
User.delete = function (id, result) {
  mysql.query("DELETE FROM user WHERE user_id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// 사용자 업데이트
User.update = function (id, user, result) {
  mysql.query(
    "UPDATE user SET user_name=?,user_email=?,user_password=?,user_address=?,user_type=?,user_img=? WHERE user_id = ?",
    [
      user.user_name,
      user.user_email,
      user.user_password,
      user.user_address,
      user.user_type,
      user.user_img,
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

User.edit = function (id, user, result) {
  mysql.query(
    "UPDATE user SET user_name=?, user_email=?, user_password=?,user_address=?,user_img=?,user_type=? WHERE user_id = ?",
    [
      user.user_name,
      user.user_email,
      user.user_password,
      user.user_address,
      user.user_img,
      user.user_type,
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

User.type = function (id, user, result) {
  mysql.query(
    "UPDATE user SET user_type='seller' WHERE user_id = ?",
    [id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = User;
