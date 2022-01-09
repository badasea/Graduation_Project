const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("DB Connected!");
});

module.exports = connection;
