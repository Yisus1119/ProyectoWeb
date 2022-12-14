const modeloCandidatos = require("../model/Candidatos");
const { CandidatosEnum } = require('./candidatoController');


GetCandidatosList = (rol) => {
    return modeloCandidatos.findAll({ where: { Puesto: rol } })
        .then((result) => result)
        .catch((err) => {
            throw new Error(err);
        });
};

exports.GetClientList = (req, res, next) => {
    res.render("client/clientLogin", { pageTitle: "Entrar al sistema", titulo: "Bienvenido al sistema de votación automatizado", homeActive: true });
}

exports.GetPosicionesList = (req, res, next) => {
    console.log(req.session.ciudadano)
    res.render("client/posicionesVotar", { pageTitle: "Elegir Posición", titulo: "Posiciones a Votar", homeActive: true, data: req.session.ciudadano });
}

exports.GetPresidentList = (req, res, next) => {
    GetCandidatosList(CandidatosEnum().Presidente)
        .then(cands => {
            res.render("client/posiciones", { pageTitle: "Lista de presidentes", titulo: "Candidatos presidenciales", homeActive: true, candidatos: cands });
        })
        .catch(err => {
            console.log(err)
        })

}

exports.GetViceList = (req, res, next) => {
    GetCandidatosList(CandidatosEnum().Vicepresidente)
        .then(cands => {
            res.render("client/posiciones", { pageTitle: "Lista de vicepresidentes", titulo: "Candidatos vicepresidenciales", homeActive: true, candidatos: cands });
        })
        .catch(err => {
            console.log(err)
        })
}

exports.GetAlcaldeList = (req, res, next) => {
    GetCandidatosList(CandidatosEnum().Alcalde)
        .then(cands => {
            res.render("client/posiciones", { pageTitle: "Lista de alcaldes", titulo: "Candidatos a la alcaldiaía", homeActive: true, candidatos: cands });
        })
        .catch(err => {
            console.log(err)
        })
}

exports.GetDiputadoList = (req, res, next) => {
    GetCandidatosList(CandidatosEnum().Diputado)
        .then(cands => {
            res.render("client/posiciones", { pageTitle: "Lista de diputados", titulo: "Candidatos a diputado", homeActive: true, candidatos: cands });
        })
        .catch(err => {
            console.log(err)
        })
}

