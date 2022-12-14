const votacionModel = require("../model/Seleccion");

exports.PostCreateCategories = (req, res, next) => {
    const nombre = req.body.Name;
    const description = req.body.Description;

    votacionModel.create({}).then(result => {
        res.redirect("/categories");
    }).catch(err => {
        console.log("Error: " + err)
    });

}

