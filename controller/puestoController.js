exports.getPresidenteList = (req, res, next) => {
    res.render("client/PresidentePositions", { pageTitle: "Selección presidencial", titulo: "Candidatos Presidenciales", homeActive: true });
}

exports.getViceList = (req, res, next) => {
    res.render("client/VicePositions", { pageTitle: "Selección Vicepresidencial", titulo: "Candidatos VicePresidenciales", homeActive: true });
}