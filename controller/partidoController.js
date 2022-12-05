exports.GetPartidosList = (req, res, next) => {
    res.render("admin/partidoAdmin/partido-list", { pageTitle: "Partidos", titulo: "Lista de partidos", homeActive: true });
}

exports.GetCreatePartidos = (req, res, next) => {
    res.render("admin/partidoAdmin/save-partido", { pageTitle: "Create Partidos", titulo: "Crea nuevos partido", homeActive: true });
}