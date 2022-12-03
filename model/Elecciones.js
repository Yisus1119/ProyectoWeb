const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Elecciones = sequelize.define("Elecciones", {
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
    FechaRealizacion: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Estado: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },

});

module.exports = Elecciones;