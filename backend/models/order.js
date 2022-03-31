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

//  가게 주문 정보 검색
Order.findShopok = function (id, result) {
  mysql.query(
    "Select * from `order` where order_state = 'buy_ok' and order_shop_id = ?",
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

// 가게 사장 수주매출용 주문 리스트
Order.findOrder = function (id, result) {
  mysql.query(
    "select t1.*, t2.user_name from `order` t1, user t2 where t1.order_user_id = t2.user_id and t1.order_state = 'buy_ok' and t1.order_shop_id in (select t1.shop_id from shop t1, user t2 where t1.user_id = t2.user_id and t2.user_id = ?)",
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

// 상품 판매 비율
Order.findChart1 = function (id, result) {
  mysql.query(
    "(select t1.order_item_name as label, SUM(t1.order_stock) as y from `order` t1, user t2 where t1.order_user_id = t2.user_id and t1.order_state = 'buy_ok' and t1.order_shop_id in (select t1.shop_id from shop t1, user t2 where t1.user_id = t2.user_id and t2.user_id = ? and t1.order_date >= DATE_ADD(NOW(), INTERVAL -1 MONTH)) group by t1.order_item_name);",
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

// 월별 매출 비율
Order.findChart2 = function (id, result) {
  mysql.query(
    "(select DATE_FORMAT(order_date,'%Y-%m') as label, SUM(order_price) as y from `order` t1, user t2 where t1.order_user_id = t2.user_id and t1.order_state = 'buy_ok' and t1.order_shop_id in (select t1.shop_id from shop t1, user t2 where t1.user_id = t2.user_id and t2.user_id = ?) GROUP BY label);",
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

// 이번달 매출값
Order.findmonthsales = function (id, result) {
  mysql.query(
    "SELECT SUM(t1.order_price) as order_price FROM `order` t1, user t2 where t1.order_user_id = t2.user_id and t1.order_state = 'buy_ok' and t1.order_shop_id in (select t1.shop_id from shop t1, user t2 where t1.user_id = t2.user_id and t2.user_id = ?) and t1.order_date >= DATE_ADD(NOW(), INTERVAL -1 MONTH);",
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

// 이번달 히트상품
Order.findhit = function (id, result) {
  mysql.query(
    "select b.label, MAX(b.y) as max from (select t1.order_item_name as label, SUM(t1.order_stock) as y from `order` t1, user t2 where t1.order_user_id = t2.user_id and t1.order_state = 'buy_ok' and t1.order_shop_id in (select t1.shop_id from shop t1, user t2 where t1.user_id = t2.user_id and t2.user_id = ?) group by t1.order_item_name) b;",
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
