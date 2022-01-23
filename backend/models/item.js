"use strict";

const mysql = require("../config/mysql");

let Item = function (item) {
  this.item_id = item.item_id;
  this.item_name = item.item_name;
  this.item_content = item.item_content;
  this.item_price = item.item_price;
  this.item_stock = item.item_stock;
  this.item_img = item.item_img;

  // 외래키 shop_id
  this.shop_id = item.shop_id;
};

// 모든 가게 검색
Item.findAll = function (result) {
  mysql.query("Select * from item", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("employees : ", res);
      result(null, res);
    }
  });
};

// 특정 상품 검색
Item.findById = function (id, result) {
  mysql.query("Select * from item where item_id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

//특정 가게 상품 검색
Item.findById_Shop = function (id, result) {
  mysql.query("Select * from item where shop_id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

// 상품 등록
Item.create = function (newEmp, result) {
  mysql.query("INSERT INTO item set ?", newEmp, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

// 상품 삭제
Item.delete = function (id, result) {
  mysql.query("DELETE FROM item WHERE item_id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Item.update = function (id, item, result) {
  mysql.query(
    "UPDATE item SET item_name=?,item_content=?,item_price=?,item_stock=?,item_img=? WHERE item_id = ?",
    [
      item.item_name,
      item.item_content,
      item.item_price,
      item.item_stock,
      item.item_img,
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

module.exports = Item;
