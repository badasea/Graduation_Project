const mysql = require("mysql");

//로컬
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  multipleStatements: true,
});

// 배포
// var connection = mysql.createConnection({
//   host: "10.0.40.143",
//   user: "b20c7bea655cec77",
//   password: "7ea71b16965da425",
//   database: "op_4798e213_fd7b_4aef_9a33_b1904b6cf9b1",
// });

connection.connect(function (err) {
  if (err) throw err;
  console.log("DB Connected!");
});

module.exports = connection;
