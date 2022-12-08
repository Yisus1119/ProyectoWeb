const Partidos = require("../model/Partidos");

exports.GetPartidosList = (req, res, next) => {
    Partidos.findAll()
        .then((result) => {

            const partidos = result.map((result) => result.dataValues);

            res.render("admin/partidoAdmin/partido-list", {
                pageTitle: "Partidos",
                titulo: "Lista de partidos",
                homeActive: true,
                partidos: partidos,
            });
        })
        .catch((err) => {
            console.log(err);
        });
};


exports.GetPartidosForm = (req, res, next) => {
    res.render("admin/partidoAdmin/save-partido", { pageTitle: "Formulario de partidos", homeActive: true, editMode: false });
}


exports.PostCreatePartidos = (req, res, next) => {
    const name = req.body.Nombre;
    const description = req.body.Descripcion;
    const logoPartido = req.body.LogoPartido;
    const estado = req.body.Estado;

    Partidos.create({ Nombre: name, Descripcion: description, LogoPartido: logoPartido, Estado: estado }).then(result => {
        res.redirect("/partidos");
    }).catch(err => {
        console.log("Error: " + err)
    });
}


exports.GetEditPartidos = (req, res, next) => {
    const edit = req.query.edit;
    const partidoId = req.params.partidosId;

    if (!edit) {
        return res.redirect("/partidos");
    }

    Partidos.findOne({ where: { Id: partidoId } })
        .then((result) => {
            const partido = result.dataValues;

            if (!partido) {
                return res.redirect("/partidos");
            }

            res.render("admin/partidoAdmin/save-partido", {
                pageTitle: "Edit partidos",
                homeActive: true,
                editMode: edit,
                partido: partido,
            });

        })
        .catch((err) => {
            console.log(err);
        });



}

exports.PostEditPartidos = (req, res, next) => {
    const partidosName = req.body.Nombre;
    const partidosDescription = req.body.Descripcion;
    const partidoLogo = req.body.LogoPartido;
    const partidosEstado = req.body.Estado;
    const partidoId = req.body.partidoId;

    Partidos.update(
        { Nombre: partidosName, Descripcion:partidosDescription, LogoPartido: partidoLogo, Estado: partidosEstado, },
        { where: { Id: partidoId } }
    )
        .then((result) => {
            return res.redirect("/partidos");
        })
        .catch((err) => {
            console.log(err);
        });
};



exports.PostDeletePartidos = (req, res, next) => {

    const partidoId = req.body.partidosId;

    Partidos.destroy({ where: { Id: partidoId } })
        .then((result) => {
            return res.redirect("/partidos");
        })
        .catch((err) => {
            console.log(err);
        });

};