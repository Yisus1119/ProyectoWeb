exports.GetLogin = (req, res, next) => {
    res.render("admin/AdminLogin/admin-login", { pageTitle: "Entrar al sistema Admin", titulo: "Ingresa como administrador", homeActive: true });
}