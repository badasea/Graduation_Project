"use strict";

const mysql = require("../config/mysql");

let Order = function (order) {
  this.order_id = order.order_id;
  this.order_date = order.order_date;
  this.order_store = order.order_store;
  this.order_item = order.order_item;
  this.order_user_id = order.order_user_id;
};

// 모든 주문 검색
Order.findAll = function (result) {
  mysql.query("Select * from order", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("employees : ", res);
      result(null, res);
    }
  });
};

// 특정 주문 검색
Order.findById = function (id, result) {
  mysql.query(
    "Select * from order where order_id = ? ",
    id,
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

// 주문 등록
Order.create = function (newEmp, result) {
  mysql.query("INSERT INTO order set ?", newEmp, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

// 주문 삭제
Order.delete = function (id, result) {
  mysql.query(
    "DELETE FROM order WHERE order_id = ?",
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

// 주문 업데이트
Order.update = function (id, order, result) {
  mysql.query(
    "UPDATE order SET order_date=?,order_store=?,order_item=?,order_user_id=? WHERE order_id = ?",
    [
      order.order_date,
      order.order_store,
      order.order_item,
      order.order_user_id,
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

module.exports = Order;
