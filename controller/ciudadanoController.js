const Ciudadanos = require("../model/Ciudadanos");

exports.GetCiudadanosList = (req, res, next) => {
    Ciudadanos.findAll()
        .then((result) => {

            const ciudadanos = result.map((result) => result.dataValues);

            res.render("admin/ciudadanoAdmin/ciudadano-list", {
                pageTitle: "Ciudadanos",
                titulo: "Lista de ciudadanos",
                homeActive: true,
                ciudadanos: ciudadanos,
            });
        })
        .catch((err) => {
            console.log(err);
        });
};


exports.GetCiudadanosForm = (req, res, next) => {
    res.render("admin/ciudadanoAdmin/save-ciudadano", { pageTitle: "Formulario de ciudadanos", homeActive: true, editMode: false });
}


exports.PostCreateCiudadanos = (req, res, next) => {
    const indentidad = req.body.DocumentoIdentidad;
    const name = req.body.Nombre;
    const apellido = req.body.Apellido;
    const email = req.body.Email;
    const estado = req.body.Estado;

    Ciudadanos.create({ DocumentoIdentidad: indentidad, Nombre: name, Apellido: apellido, Email: email, Estado: estado }).then(result => {
        res.redirect("/ciudadanos");
    }).catch(err => {
        console.log("Error: " + err)
    });
}


exports.GetEditCiudadanos = (req, res, next) => {
    const edit = req.query.edit;
    const ciudadanoId = req.params.ciudadanosId;

    if (!edit) {
        return res.redirect("/ciudadanos");
    }

    Ciudadanos.findOne({ where: { Id:ciudadanoId } })
        .then((result) => {
            const ciudadano= result.dataValues;

            if (!ciudadano) {
                return res.redirect("/ciudadanos");
            }

            res.render("admin/ciudadanoAdmin/save-ciudadano", {
                pageTitle: "Edit ciudadanos",
                homeActive: true,
                editMode: edit,
                ciudadano: ciudadano,
            });

        })
        .catch((err) => {
            console.log(err);
        });



}

exports.PostEditCiudadanos = (req, res, next) => {
    const ciudadanosIndentidad = req.body.DocumentoIdentidad;
    const ciudadanosName = req.body.Nombre;
    const ciudadanosApellido = req.body.Apellido;
    const ciudadanosEmail = req.body.Email;
    const ciudadanosEstado = req.body.Estado;
    const ciudadanoId = req.body.ciudadanoId;

    Ciudadanos.update(
        { DocumentoIdentidad: ciudadanosIndentidad,  Nombre:ciudadanosName, Apellido: ciudadanosApellido, Email: ciudadanosEmail , Estado: ciudadanosEstado, },
        { where: { Id: ciudadanoId } }
    )
        .then((result) => {
            return res.redirect("/ciudadanos");
        })
        .catch((err) => {
            console.log(err);
        });
};



exports.PostDeleteCiudadanos = (req, res, next) => {

    const ciudadanoId = req.body.ciudadanosId;

    Ciudadanos.destroy({ where: { Id: ciudadanoId } })
        .then((result) => {
            return res.redirect("/ciudadanos");
        })
        .catch((err) => {
            console.log(err);
        });

};