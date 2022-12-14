const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Candidato = sequelize.define("Candidatos", {
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
    PartidoPerteneciente: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Puesto: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    FotoPerfil: {
        type: Sequelize.TEXT('long'),
        allowNull: false,
    },
    Estado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    }

});

module.exports = Candidato;