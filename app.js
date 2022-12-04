const express = require('express')
const app = express()
const port = 3004
const path = require("path");
const expressHbs = require("express-handlebars");
const sequelize = require("./util/database");
//const { v4: uuidv4 } = require("uuid");  // we gon´ use this for save our participants candidates profiles photo

//modelos de las tablas
const CandidatoModel = require("./model/Candidatos");
const puestoModel = require("./model/Puesto");
const eleccionesModel = require("./model/Elecciones");
const PartidosModel = require("./model/Partidos");
const UsuariosModel = require("./model/Usuarios");
const CiudadanosModel = require("./model/Ciudadanos");

app.engine("hbs", expressHbs.engine({ //configurando layout principal
    layoutsDir: "views/layout/",
    defaultLayout: "main-layout",
    extname: "hbs",
}));

app.set("view engine", "hbs");
app.set("views", "views");


//error controller call
const errorController = require("./controller/errorController");

//routes call
const clientRoutes = require("./routes/client");


//satic path
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use(clientRoutes);
/*
app.get('/', (req, res) => {
    res.send('Hello World!')
})
*/


// not found 404 route
app.use(errorController.Get404);


//communication with DB
sequelize.sync().then(function (result) {
    console.log(result);
}).catch(err => {
    console.log(err);
});

app.listen(port, () => {
    console.log(`Corriendo en el servidor: ${port}`)
})

