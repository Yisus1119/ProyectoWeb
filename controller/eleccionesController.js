const eleccionesModel = require("../model/Elecciones");

exports.GetEleccionesList = (req, res, next) => {

    eleccionesModel.findAll().then(result => {
        const eleccionesList = result.map((result) => result.dataValues)

        res.render("admin/eleccionesAdmin/eleccionesList", { pageTitle: "Listado de elecciones", titulo: "Historial de elecciones", eleccionesList: eleccionesList, admin: true });
    }).catch(err => {
        console.log(err)
    });

}

exports.GetEleccionesForm = (req, res, next) => {
    res.render("admin/eleccionesAdmin/elecciones", { pageTitle: "Elecciones", titulo: "Crear convocatoria", admin: true })
}

exports.PostCreateElecciones = (req, res, next) => {
    const id = req.params.Id;
    const nombre = req.body.Nombre;
    const fecha = req.body.Fecha;
    const estado = req.body.Estado;

    eleccionesModel.create({ Nombre: nombre, FechaRealizacion: fecha, Estado: estado, Id: id }).then(result => {
        res.redirect("/elecciones");
    }).catch(err => {
        console.log("Error: " + err)
    });
}