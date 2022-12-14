const ciudadanosModel = require("../model/Ciudadanos");
const candidatosModel = require("../model/Candidatos");
const eleccionesModel = require("../model/Elecciones");

const seleccionModel = require("../model/Seleccion");


exports.postCiudadano = (req, res, next) => {
    const cedula = req.params.DocumentoIdentidad;


    seleccionModel.create({ DocumentoIdentidad: cedula }).then(result => {
        res.redirect("/");
    }).catch(err => {
        console.log("Error: " + err)
    });

}

