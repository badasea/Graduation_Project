const mysql = require("mysql");

//로컬
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

// 배포
// var connection = mysql.createConnection({
//   host: process.env.DB_HOST_PAAS,
//   user: process.env.DB_USER_PAAS,
//   password: process.env.DB_PASSWORD_PAAS,
//   //database: process.env.DB_PAAS,
//   port: process.env.DB_PORT_PAAS,
// });

connection.connect(function (err) {
  if (err) throw err;
  console.log("DB Connected!");
});

module.exports = connection;
