"use strict";

const mysql = require("../config/mysql");

let Help = function (help) {
  this.help_id = help.help_id;
  this.help_title = help.help_title;
  this.help_content = help.help_content;
  this.help_state = help.help_state;
  this.help_user_id = help.help_user_id;
};

// 모든 문의 검색
Help.findAll = function (result) {
  mysql.query("Select * from help", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("employees : ", res);
      result(null, res);
    }
  });
};

// 특정 문의 검색
Help.findById = function (id, result) {
  mysql.query("Select * from help where help_id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

// 문의 등록
Help.create = function (newEmp, result) {
  mysql.query("INSERT INTO help set ?", newEmp, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

// 문의 삭제
Help.delete = function (id, result) {
  mysql.query("DELETE FROM help WHERE help_id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// 문의 수정
Help.update = function (id, help, result) {
  mysql.query(
    "UPDATE help SET help_title=?,help_content=?,help_state=?,help_user_id=? WHERE order_id = ?",
    [
      (help_title = help.help_title),
      (help_content = help.help_content),
      (help_state = help.help_state),
      (help_user_id = help.help_user_id),
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

module.exports = Help;
