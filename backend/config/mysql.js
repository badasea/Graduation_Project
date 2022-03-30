const mysql = require("mysql");

//로컬
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  multipleStatements: true,
  dateStrings: "date",
});

// 배포
// var connection = mysql.createConnection({
//   host: process.env.HEROKU_DB_HOST,
//   user: process.env.HEROKU_DB_USER,
//   password: process.env.HEROKU_DB_PASSWORD,
//   database: process.env.HEROKU_DB,
//   multipleStatements: true,
//   dateStrings: "date",
// });

connection.connect(function (err) {
  if (err) throw err;
  console.log("DB Connected!");
});
module.exports = connection;
