const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Partido = sequelize.define("Partidos", {
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
    Descripcion: {
        type: Sequelize.TEXT('long'),
        allowNull: false,
    },
    LogoPartido: {
        type: Sequelize.TEXT('long'),
        allowNull: false,
    },
    Estado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },

});

module.exports = Partido;