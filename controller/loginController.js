const loginModel = require("../model/Usuarios");
const Sequelize = require('sequelize');
const mysql = require("mysql2");
const conexionBD = require("../util/database");

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "toor",
});

exports.GetLogin = (req, res, next) => {
    res.render("admin/AdminLogin/admin-login", { pageTitle: "Entrar al sistema Admin", titulo: "Ingresa como administrador", homeActive: true, admin: false, correct: true });
}

exports.Postcredentials = (req, res, next) => {
    const usuario = req.body.User;
    const pass = req.body.Password;

    loginModel.findAll({ where: { NombreUsuario: usuario, Passwd: pass } }).then((result) => {
        if (result == false) {
            res.render("admin/AdminLogin/admin-login", { pageTitle: "Entrar al sistema Admin", titulo: "Ingresa como administrador", homeActive: true, admin: false, correct: false });
            return
        }


        res.render("admin/start/inicio", { pageTitle: "Panel", titulo: "Bienvenido al panel de administración", homeActive: true, admin: true });
    }).catch((err) => {
        console.log(err)
        console.log('Ok')
    });;
}


exports.GetLandingPage = (req, res, next) => {
    res.render("admin/Start/inicio", { pageTitle: "Administracion", titulo: "Bienvenido al panel de administración", homeActive: true, admin: true })
}