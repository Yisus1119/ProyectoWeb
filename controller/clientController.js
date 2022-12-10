exports.GetClientList = (req, res, next) => {
    res.render("client/clientLogin", { pageTitle: "Entrar al sistema", titulo: "Bienvenido al sistema de votación automatizado", homeActive: true });
}

exports.GetPosicionesList = (req, res, next) => {
    res.render("client/posicionesVotar", { pageTitle: "Elegir Posición", titulo: "Posiciones a Votar", homeActive: true });
}

exports.GetPresidentList = (req, res, next) => {
    res.render("client/PresidentePositions", { pageTitle: "Lista de presidentes", titulo: "Candidatos presidenciales", homeActive: true });
}

exports.GetViceList = (req, res, next) => {
    res.render("client/VicePositions", { pageTitle: "Lista de vicepresidentes", titulo: "Candidatos vicepresidenciales", homeActive: true });
}

exports.GetAlcaldeList = (req, res, next) => {
    res.render("client/AlcaldePosition", { pageTitle: "Lista de alcaldes", titulo: "Candidatos a la alcaldía", homeActive: true });
}

exports.GetDiputadoList = (req, res, next) => {
    res.render("client/DiputadoPositions", { pageTitle: "Lista de diputados", titulo: "Candidatos a diputados", homeActive: true });
}

