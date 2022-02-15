const mysql = require("mysql");

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

if (process.env.VCAP_SERVICES) {
  // 배포
  const cloud_env = JSON.parse(process.env.VCAP_SERVICES);
  const mysql_env = cloud_env["Mysql-DB"][0]["credentials"];
  connection = mysql.createConnection({
    host: mysql_env.hostname,
    user: mysql_env.username,
    password: mysql_env.password,
    database: mysql_env.name,
  });
}

connection.connect(function (err) {
  if (err) throw err;
  console.log("DB Connected!");
});

module.exports = connection;
