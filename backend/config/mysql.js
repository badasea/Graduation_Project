const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// const connection = {
//   init: function () {
//     return mysql.createConnection({
//       host: process.env.DB_HOST,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB,
//     });
//   },
//   open: function (con) {
//     con.connect((err) => {
//       if (err) {
//         console.log("MySQL 연결 실패 : ", err);
//       } else {
//         console.log("MySQL Connected!!!");
//       }
//     });
//   },
//   close: function (con) {
//     con.end((err) => {
//       if (err) {
//         console.log("MySQL 종료 실패 : ", err);
//       } else {
//         console.log("MySQL Terminated...");
//       }
//     });
//   },
// };

// module.exports = connection;
