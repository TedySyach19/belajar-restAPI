// Cara connect mysql
// Cara mengkoneksikan mysql dengan ini yaitu lewat package yang bernama mysql2
// npm install mysql2
// 1. import mysql2
const mysql = require("mysql2");
// lalu buat dbPool
const dbPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = dbPool.promise();
