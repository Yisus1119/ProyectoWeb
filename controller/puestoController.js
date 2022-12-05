exports.GetPuestosList = (req, res, next) => {
    res.render("admin/puestoAdmin/puesto-list", { pageTitle: "Puestos", titulo: "Lista de Puestos", homeActive: true });
}

exports.getPresidenteList = (req, res, next) => {
    res.render("client/PresidentePositions", { pageTitle: "Selección presidencial", titulo: "Candidatos presidenciales", homeActive: true });
}

exports.getViceList = (req, res, next) => {
    res.render("client/VicePositions", { pageTitle: "Selección Vicepresidencial", titulo: "Candidatos Vicepresidenciales", homeActive: true });
}

exports.GetCreatePuestos = (req, res, next) => {
    res.render("admin/puestoAdmin/save-puesto", { pageTitle: "Crear Puestos", titulo: "Crea un nuevo puesto", homeActive: true });
}

exports.getAlcaldeList = (req, res, next) => {
    res.render("client/AlcaldePosition", { pageTitle: "Selección Alcaldía", titulo: "Candidatos a la alcaldía" });
}

exports.getDiputadoList = (req, res, next) => {
    res.render("client/DiputadoPositions", { pageTitle: "Selección Diputado", titulo: "Candidatos a diputado" });
}