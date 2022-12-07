const Candidatos = require("../model/Candidatos");

exports.GetCandidatosList = (req, res, next) => {

    Candidatos.findAll().then(result => {

       const candidatos = result.map((result) => result.dataValue);

        res.render("admin/candidatoAdmin/candidato-list", { 
        pageTitle: "Candidatos", 
        titulo: "Lista de candidatos", 
        homeActive: true,
        candidatos: candidatos,
    });
    })
    .catch(err => {
        console.log(err)
    });

}

//para llamar el formulario
exports.GetCandidatoForm = (req, res, next) => {
    res.render("admin/candidatoAdmin/save-candidato", { 
        pageTitle: "Crear Candidatos", 
        titulo: "Crea nuevos candidatos", 
        homeActive: true,
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
            res.redirect("admin/candidatoAdmin/candidato-list")
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
        return res.redirect("admin/candidatoAdmin/candidato-list");
    }

    Candidatos.findOne({ where: { Id: idCandidatos } }).then(result => {
        const candidato = result.dataValues

        res.render("admin/candidatoAdmin/candidato-list", { pageTitle: "Editar Candidatos", titulo: "Lista de candidatos", homeActive: true });

        if (!candidato) {
            return res.redirect("admin/candidatoAdmin/candidato-list")
        }

    })
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
            return res.redirect("admin/candidatoAdmin/candidato-list")
        }).catch(err => {
            console.log(err)
        });
}

//delete
exports.PostDeleteCandidatos = (req, res, next) => {
    const idCandidatos = req.body.idCandidatos;

    Candidatos.destroy({ where: { idCandidatos: idCandidatos } }).then((result) => {
        res.redirect("admin/candidatoAdmin/candidato-list")
    }).catch(err => {
        console.log(err)
    });
}