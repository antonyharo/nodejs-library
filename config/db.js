const mysql = require("mysql2/promise");

// require("dotenv").config();

const pool = mysql.createPool({
    host: "localhost",
    database: "library",
    user: "root",
    password: "",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = pool;
