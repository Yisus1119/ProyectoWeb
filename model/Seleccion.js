const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const { DataTypes } = require("sequelize");

const Seleccion = sequelize.define("Selecciones", {
    Cedula: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
});

module.exports = Seleccion;