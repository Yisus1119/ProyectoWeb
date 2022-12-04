const { CHAR } = require("sequelize");
const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const { DataTypes } = require("sequelize");

const Usuarios = sequelize.define("Usuarios", {
    Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    Nombre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Apellido: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    NombreUsuario: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Passwd: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Estado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },


});

module.exports = Usuarios;