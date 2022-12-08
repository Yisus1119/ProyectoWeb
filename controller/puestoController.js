const Puestos = require("../model/Puesto");

exports.GetPuestosList = (req, res, next) => {
    Puestos.findAll()
        .then((result) => {

            const puestos = result.map((result) => result.dataValues);

            res.render("admin/puestoAdmin/puesto-list", {
                pageTitle: "Puestos",
                titulo: "Lista de puestos",
                puestosActive: true,
                puestos: puestos,
            });
        })
        .catch((err) => {
            console.log(err);
        });
};


/*
exports.GetCreatePuestos = (req, res, next) => {
    res.render("admin/puestoAdmin/save-puesto",
        {
            pageTitle: "Create Puestos",
            titulo: "Crea nuevos partidoss",
            puestosActive: true,
            editMode: false
        });
};
*/

/*
exports.PostCreatePuestos = (req, res, next) => {
    const puestosName = req.body.Nombre;
    const puestosDescription = req.body.Descripcion;
    const puestosEstado = req.body.Estado;

    Puestos.create({
        Nombre: puestosName,
        Descripcion: puestosDescription,
        Estado: puestosEstado,
    })
        .then((result) => {
            res.redirect("/");
        })
        .catch((err) => {
            console.log(err);
        });

};
*/

exports.GetPuestosForm = (req, res, next) => {
    res.render("admin/puestoAdmin/save-puesto", { pageTitle: "Formulario de puestos", homeActive: true });
}


exports.PostCreatePuestos = (req, res, next) => {
    const name = req.body.Nombre;
    const description = req.body.Descripcion;
    const estado = req.body.Estado;

    Puestos.create({ Nombre: name, Descripcion: description, Estado: estado }).then(result => {
        return res.redirect("/");
    }).catch(err => {
        console.log("Error: " + err)
    });
}


exports.GetEditPuestos = (req, res, next) => {
    const edit = req.query.edit;
    const puestoId = req.params.puestosId;

    if (!edit) {
        return res.redirect("/puestos");
    }

    Puestos.findOne({ where: { Id: puestoId } })
        .then((result) => {
            const puesto = result.dataValues;

            if (!puesto) {
                return res.redirect("/puestos");
            }

            res.render("admin/puestoAdmin/save-puesto", {
                pageTitle: "Edit puestos",
                puestosActive: true,
                editMode: edit,
                puesto: puesto,
            });

        })
        .catch((err) => {
            console.log(err);
        });



}

exports.PostEditPuestos = (req, res, next) => {
    const puestosName = req.body.Nombre;
    const puestosDescription = req.body.Descripcion;
    const puestosEstado = req.body.Estado;
    const puestoId = req.body.puetosId;

    Editorials.update(
        { Nombre: puestosName, Descripcion: puestosDescription, Estado: puestosEstado, },
        { where: { Id: puestoId } }
    )
        .then((result) => {
            return res.redirect("/puestos");
        })
        .catch((err) => {
            console.log(err);
        });
};



exports.PostDeletePuestos = (req, res, next) => {

    const puestoId = req.body.puestosId;

    Puestos.destroy({ where: { Id: puestoId } })
        .then((result) => {
            return res.redirect("/puestos");
        })
        .catch((err) => {
            console.log(err);
        });

};