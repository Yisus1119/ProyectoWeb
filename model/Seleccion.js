const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const { DataTypes } = require("sequelize");

const Seleccion = sequelize.define("Selecciones", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    cedula: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    idCandidato: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    nombreCandidato: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    idEleccion: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

});

module.exports = Seleccion;