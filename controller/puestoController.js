exports.GetPuestosList = (req, res, next) => {
    res.render("admin/puestoAdmin/puesto-list", { pageTitle: "Puestos", titulo: "Lista de Puestos", homeActive: true });
}

exports.GetCreatePuestos = (req, res, next) => {
    res.render("admin/puestoAdmin/save-puesto", { pageTitle: "Crear Puestos", titulo: "Crea un nuevo puesto", homeActive: true });
}