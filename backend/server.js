const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3001;
const mysql = require("mysql");
require("dotenv").config();

const { swaggerUi, specs } = require("./modules/swagger");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// mysql 연동
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

connection.connect();

app.get("/db", (req, res) => {
  var queryString = "SELECT * FROM user";
  connection.query(queryString, (err, results, fields) => {
    if (err) throw err;
    //console.log("results: ", results);
    res.json(results); // json
  });
});

// Test Data
// const users = [
//   { id: 1, name: "user1" },
//   { id: 2, name: "user2" },
//   { id: 3, name: "user3" },
// ];

app.get("/", (req, res) => {
  res.json({
    success: true,
  });
});

// app.get("/user", (req, res) => {
//   // user 정보 반환
//   res.json({ users: users });
// });

app.listen(port, () => {
  console.log(`server is listening at localhost:${process.env.PORT}`);
});
