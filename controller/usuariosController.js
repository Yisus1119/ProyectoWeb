const Usuarios = require("../model/Usuarios");


/*
exports.GetUsuariosList = (req, res, next) => {

    Usuarios.findAll().then(result => { //buscar los usuarios

        const usuariosList = result.map((result) => result.dataValues) //iteramos, y mapeamos los datos para listar los datos

        res.render("admin/candidatoAdmin/candidato-list", { pageTitle: "Usuarios", titulo: "Lista de candidatos", homeActive: true, usuariosList: usuariosList, admin: true });

    }).catch(err => {
        console.log(err)
    });
}
*/

//para llamar el formulario
exports.GetCandidatoForm = (req, res, next) => {
    res.render("admin/candidatoAdmin/save-candidato", {
        pageTitle: "Crear Candidatos",
        titulo: "Crea nuevos candidatos",
        homeActive: true,
        admin: true
    });
}

//create

exports.PostCreateCandidatos = (req, res, next) => {
    const nombre = req.body.Nombre;
    const apellido = req.body.Apellido;
    const partido = req.body.PartidoPerteneciente;
    const puesto = req.body.Puesto;
    const foto = req.body.FotoPerfil;
    const estado = req.body.Estado;

    Candidatos.create({ Nombre: nombre, Apellido: apellido, PartidoPerteneciente: partido, Puesto: puesto, FotoPerfil: foto, Estado: estado }).then(
        result => {
            res.redirect("/candidatos")
        }
    ).catch(err => {
        console.log("Error: " + err)
    });

}

//GET ID
exports.GetEditCandidatos = (req, res, next) => {
    const edit = req.query.edit;
    const idCandidatos = req.params.Id;

    if (!edit) {
        return res.redirect("/candidatos");
    }

    Candidatos.findOne({ where: { Id: idCandidatos } }).then(result => {
        const candidato = result.dataValues


        if (!candidato) {
            return res.redirect("/candidatos")
        }

        res.render("admin/candidatoAdmin/save-candidato", { pageTitle: "Editar Candidatos", titulo: "Lista de candidatos", editMode: edit, homeActive: true, admin: true });

    }).catch(err => {
        console.log(err)
    });

}

//POST edit
exports.PostEditCandidatos = (req, res, next) => {
    const nombre = req.body.Nombre;
    const apellido = req.body.Apellido;
    const partido = req.body.PartidoPerteneciente;
    const puesto = req.body.Puesto;
    const foto = req.body.FotoPerfil;
    const estado = req.body.Estado;
    const idCandidatos = req.body.idCandidatos;

    Candidatos.update({ Nombre: nombre, Apellido: apellido, PartidoPerteneciente: partido, Puesto: puesto, FotoPerfil: foto, Estado: estado },
        { where: { idCandidatos: idCandidatos } }).then((result) => {
            return res.redirect("/candidatos")
        }).catch(err => {
            console.log(err)
        });
}

//delete
exports.PostDeleteCandidatos = (req, res, next) => {
    const idCandidatos = req.body.idCandidatos;

    Candidatos.destroy({ where: { idCandidatos: idCandidatos } }).then((result) => {
        res.redirect("/candidatos")
    }).catch(err => {
        console.log(err)
    });
}