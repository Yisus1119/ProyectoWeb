const Sequelize = require('sequelize');
const mysql = require("mysql2");

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
});

conexion.query(
    `CREATE DATABASE IF NOT EXISTS Votacion`,
    function (err, results) {
        console.log(results);
        console.log(err);
    }
);

conexion.end();

const sequelize = new Sequelize("Votacion", "root", "", { dialect: "mysql", host: "localhost", port: 3306 });


module.exports = sequelize;