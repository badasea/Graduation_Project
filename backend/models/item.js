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

// 모든 상품 검색
Item.findAll = function (result) {
  mysql.query(
    "Select t1.*, t2.*,t3.user_img from item t1, shop t2, user t3 where t1.shop_id = t2.shop_id and t2.user_id = t3.user_id",
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        //console.log("employees : ", res);
        result(null, res);
      }
    }
  );
};

// 특정 상품 검색
Item.findById = function (id, result) {
  mysql.query(
    "Select * from item t1, shop t2 where t1.shop_id = t2.shop_id and t1.shop_id = ?",
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

// 특정 업종 상품 검색1
Item.findfood = function (id, result) {
  mysql.query(
    "Select t1.*, t2.*,t3.user_img from item t1, shop t2, user t3 where t1.shop_id = t2.shop_id and t2.user_id = t3.user_id and t2.shop_business_type = '음식점' and t2.shop_region = ?",
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

// 특정 업종 상품 검색2
Item.findhanbok = function (id, result) {
  mysql.query(
    "Select t1.*, t2.*,t3.user_img from item t1, shop t2, user t3 where t1.shop_id = t2.shop_id and t2.user_id = t3.user_id and t2.shop_business_type = '한복점' and t2.shop_region = ?",
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

// 특정 업종 상품 검색3
Item.findcraftshop = function (id, result) {
  mysql.query(
    "Select t1.*, t2.*,t3.user_img from item t1, shop t2, user t3 where t1.shop_id = t2.shop_id and t2.user_id = t3.user_id and t2.shop_business_type = '공방' and t2.shop_region = ?",
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

// 특정 업종 상품 검색4
Item.findetc = function (id, result) {
  mysql.query(
    "Select t1.*, t2.*,t3.user_img from item t1, shop t2, user t3 where t1.shop_id = t2.shop_id and t2.user_id = t3.user_id and t2.shop_business_type = '기타' and t2.shop_region = ?",
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

// 특정 상품 검색
Item.findItemId = function (id, result) {
  mysql.query("Select * from item where item_id = ?", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

// 가게 관리하기
Item.findManage = function (id, result) {
  mysql.query(
    "Select * from shop t2, item t3 where t2.shop_id = t3.shop_id and t2.user_id = ?",
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

// 특정 상품 검색
Item.findId = function (id, result) {
  mysql.query("Select * from item where item_id = ?", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

//특정 가게 상품 검색
// Item.findById_Shop = function (id, result) {
//   mysql.query("Select * from item where shop_id = ? ", id, function (err, res) {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//     } else {
//       result(null, res);
//     }
//   });
// };

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
