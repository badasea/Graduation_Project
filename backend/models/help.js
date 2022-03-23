"use strict";

const mysql = require("../config/mysql");

let Help = function (help) {
  this.help_id = help.help_id;
  this.help_title = help.help_title;
  this.help_content = help.help_content;
  this.help_date = help.help_date;
  this.help_user_id = help.help_user_id;
  this.help_user_name = help.help_user_name;
};

// 모든 사용자 검색
Help.findAll = function (result) {
  mysql.query(
    "Select * from help t1, user t2 where t1.help_user_id = t2.user_id",
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("employees : ", res);
        result(null, res);
      }
    }
  );
};

// 특정 사용자 검색
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

// 사용자 등록
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

// 사용자 삭제
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

// 사용자 업데이트
Help.update = function (id, help, result) {
  mysql.query(
    "UPDATE help SET help_title=?,help_content=?,help_date=?,help_user_id=?,help_user_name=? WHERE help_id = ?",
    [
      help.help_title,
      help.help_content,
      help.help_date,
      help.help_user_id,
      help.help_user_name,
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
