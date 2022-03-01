"use strict";

const mysql = require("../config/mysql");

let Shop = function (shop) {
  this.shop_id = shop.shop_id;
  this.shop_name = shop.shop_name;
  this.shop_registration_num = shop.shop_registration_num;
  this.shop_business_type = shop.shop_business_type;
  this.shop_phone = shop.shop_phone;
  this.shop_region = shop.shop_region;
  this.shop_address = shop.shop_address;
  this.shop_image = shop.shop_image;
  this.shop_content = shop.shop_content;
  // 외래키 user_id
  this.user_id = shop.user_id;
};

// 모든 가게 검색
Shop.findAll = function (result) {
  mysql.query(
    "Select t2.*,t3.user_img from shop t2, user t3 where t2.user_id = t3.user_id",
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

// 특정 가게 검색
Shop.findById = function (id, result) {
  mysql.query("Select * from shop where shop_id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

// 특정 가게 검색2
Shop.findById2 = function (id, result) {
  mysql.query("Select * from shop where user_id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

// 가게 등록
Shop.create = function (newEmp, result) {
  mysql.query("INSERT INTO shop set ?", newEmp, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

// 가게 삭제 (사용자는 이용 불가 쿼리문)
Shop.delete = function (id, result) {
  mysql.query("DELETE FROM shop WHERE shop_id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Shop.update = function (id, shop, result) {
  mysql.query(
    "UPDATE shop SET shop_name=?,shop_registration_num=?,shop_business_type=?,shop_phone=?,shop_region=?,shop_address=?,shop_image=?,shop_content=? WHERE shop_id = ?",
    [
      shop.shop_name,
      shop.shop_registration_num,
      shop.shop_business_type,
      shop.shop_phone,
      shop.shop_region,
      shop.shop_address,
      shop.shop_image,
      shop.shop_content,
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

// 지역 검색
Shop.findByjongno = function (id, result) {
  mysql.query(
    "Select * from shop where shop_region = '종로구' and shop_business_type = ?",
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

Shop.findByseongbuck = function (id, result) {
  mysql.query(
    "Select * from shop where shop_region = '성북구' and shop_business_type = ?",
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

Shop.findByyeongdeungpo = function (id, result) {
  mysql.query(
    "Select * from shop where shop_region = '영등포구' and shop_business_type = ?",
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

// 업종 검색
Shop.findByfood = function (id, result) {
  mysql.query(
    "Select * from shop where shop_business_type = '음식점' and shop_region = ? ",
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

Shop.findBycraftshop = function (id, result) {
  mysql.query(
    "Select * from shop where shop_business_type = '공방' and shop_region = ? ",
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

Shop.findByetc = function (id, result) {
  mysql.query(
    "Select * from shop where shop_business_type = '기타' and shop_region = ? ",
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

Shop.findByhanbok = function (id, result) {
  mysql.query(
    "Select * from shop where shop_business_type = 한복 and shop_region = ? ",
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

Shop.findByhanbok = function (id, result) {
  mysql.query(
    "Select * from shop where shop_business_type = 한복 and shop_region = ? ",
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

module.exports = Shop;
