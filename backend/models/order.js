"use strict";

const mysql = require("../config/mysql");

let Order = function (order) {
  this.order_id = order.order_id;
  this.order_date = order.order_date;
  this.order_shop_id = order.order_shop_id;
  this.order_item_name = order.order_item_name;
  this.order_shop_name = order.order_shop_name;
  this.order_price = order.order_price;
  this.order_stock = order.order_stock;
  this.order_state = order.order_state;
  this.order_user_id = order.order_user_id;
};

// 모든 주문 검색
Order.findAll = function (result) {
  mysql.query("Select * from `order`", function (err, res) {
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
    "Select * from `order` where order_id = ? ",
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

// 사용자 주문 정보 검색
Order.findUserok = function (id, result) {
  mysql.query(
    "Select * from `order` where order_state = 'buy_ok' and order_user_id = ?",
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

// 사용자 장바구니 정보 검색
Order.findByUser = function (id, result) {
  mysql.query(
    "Select * from `order` where order_state = 'cart' and order_user_id = ?",
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
  mysql.query("INSERT INTO `order` set ?", newEmp, function (err, res) {
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
    "DELETE FROM `order` WHERE order_id = ?",
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
Order.update = function (id, user, result) {
  mysql.query(
    "UPDATE `order` SET       order.order_date =? order.order_shop_id=? order.order_item_name = ? order.order_shop_name = ? order.order_price = ? order.order_stock = ? order.order_state = ? order.order_user_id=? WHERE order_id = ?",
    [
      order.order_date,
      order.order_shop_id,
      order.order_item_name,
      order.order_shop_name,
      order.order_price,
      order.order_stock,
      order.order_state,
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

// 결재 완료
Order.cartok = function (id, user, result) {
  mysql.query(
    "UPDATE `order` SET order_state = 'buy_ok' WHERE order_user_id = ?",
    id,
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

// 주문 완료
Order.ok = function (id, user, result) {
  mysql.query(
    "UPDATE `order` SET order_date=? WHERE order_id = ?",
    [order.order_date, id],
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
