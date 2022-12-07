exports.getPresidenteList = (req, res, next) => {
    res.render("client/PresidentePositions", { pageTitle: "Selección presidencial", titulo: "Candidatos presidenciales", homeActive: true });
}

exports.getViceList = (req, res, next) => {
    res.render("client/VicePositions", { pageTitle: "Selección Vicepresidencial", titulo: "Candidatos Vicepresidenciales", homeActive: true });
}

exports.getAlcaldeList = (req, res, next) => {
    res.render("client/AlcaldePosition", { pageTitle: "Selección Alcaldía", titulo: "Candidatos a la alcaldía" });
}

exports.getDiputadoList = (req, res, next) => {
    res.render("client/DiputadoPositions", { pageTitle: "Selección Diputado", titulo: "Candidatos a diputado" });
}