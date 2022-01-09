const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
app.use(morgan("dev"));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const port = process.env.PORT || 3001;

// const mysql = require("mysql");
require("dotenv").config();

const UserRoute = require("./routes/user.routes");

app.use("/api/user", UserRoute);

// mysql 연동
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB,
// });

// connection.connect();

// app.get("/db", (req, res) => {
//   var queryString = "SELECT * FROM user";
//   connection.query(queryString, (err, results, fields) => {
//     if (err) throw err;
//     //console.log("results: ", results);
//     res.json(results); // json
//   });
// });

app.listen(port, () => {
  console.log(`server is listening at localhost:` + port);
});

///// TEST
app.get("/", (req, res) => {
  res.json({
    success: true,
  });
});
// Test Data
// const users = [
//   { id: 1, name: "user1" },
//   { id: 2, name: "user2" },
//   { id: 3, name: "user3" },
// ];
// app.get("/user", (req, res) => {
//   // user 정보 반환
//   res.json({ users: users });
// });
