exports.GetCandidatosList = (req, res, next) => {
    res.render("admin/candidatoAdmin/candidato-list", { pageTitle: "Candidatos", titulo: "Lista de candidatos", homeActive: true });
}

exports.GetCreateCandidatos = (req, res, next) => {
    res.render("admin/candidatoAdmin/save-candidato", { pageTitle: "Crear Candidatos", titulo: "Crea nuevos candidatos", homeActive: true });
}