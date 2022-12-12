const clientLogModel = require("../model/Seleccion");

exports.GetLoginClient = (req, res, next) => {
    const cedula = req.body.Cedula;



}

exports.PostLoginClient = (req, res, next) => {
    const cedula = req.body.Cedula;

    clientLogModel.create({ Cedula: cedula }).then(result => {
        res.redirect("/votar");
    }).catch(err => {
        console.log("Error: " + err);
    });
}