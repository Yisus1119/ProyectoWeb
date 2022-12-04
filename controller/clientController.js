exports.GetClientList = (req, res, next) => {
    res.render("client/clientLogin", { pageTitle: "Entrar al sistema", titulo: "Bienvenido al sistema de votación automatizado", homeActive: true });
}

exports.GetPosicionesList = (req, res, next) => {
    res.render("client/posicionesVotar", { pageTitle: "Elegir Posición", titulo: "Posiciones a Votar", homeActive: true });
}