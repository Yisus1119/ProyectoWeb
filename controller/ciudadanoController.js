exports.GetCiudadanosList = (req, res, next) => {
    res.render("admin/ciudadanoAdmin/ciudadano-list", { pageTitle: "Ciudadanos", titulo: "Lista de ciudadanos", homeActive: true });
}

exports.GetCreateCiudadanos = (req, res, next) => {
    res.render("admin/ciudadanoAdmin/save-ciudadano", { pageTitle: "Create Ciudadanos", titulo: "Crea nuevos ciudadanos", homeActive: true });
}