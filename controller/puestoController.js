exports.GetPuestosList = (req, res, next) => {
    res.render("admin/puestoAdmin/puesto-list", { pageTitle: "Puestos", titulo: "Lista de Puestos", homeActive: true });
}
exports.getPresidenteList = (req, res, next) => {
    res.render("client/PresidentePositions", { pageTitle: "Selección presidencial", titulo: "Candidatos Presidenciales", homeActive: true });
}

exports.getViceList = (req, res, next) => {
    res.render("client/VicePositions", { pageTitle: "Selección Vicepresidencial", titulo: "Candidatos VicePresidenciales", homeActive: true });
}
exports.GetCreatePuestos = (req, res, next) => {
    res.render("admin/puestoAdmin/save-puesto", { pageTitle: "Crear Puestos", titulo: "Crea un nuevo puesto", homeActive: true });
}