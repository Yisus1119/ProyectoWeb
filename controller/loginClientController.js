const clientLogModel = require("../model/Ciudadanos");

exports.GetLoginClient = (req, res, next) => {
    const cedula = req.body.Cedula;



}

exports.PostLoginClient = (req, res, next) => {
    const cedula = req.body.Cedula;

    clientLogModel.findByPk(cedula)
        .then(usr => {

            if(usr != null) {
                req.session.ciudadano = {cedula: usr};
                console.log(usr)
                res.redirect("/votar");
            }

            res.redirect("/");

        })
        .catch(err => {
            req.session.ciudadano = {}
            console.log(err);
        })   

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