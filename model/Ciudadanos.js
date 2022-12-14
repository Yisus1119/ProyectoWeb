const { CHAR } = require("sequelize");
const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Ciudadanos = sequelize.define("Ciudadanos", {
    DocumentoIdentidad: {
        type: Sequelize.CHAR(13),
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
    Estado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },


});

module.exports = Ciudadanos;