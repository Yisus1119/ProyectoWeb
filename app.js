const express = require('express')
const app = express()
const port = 3004
const path = require("path");
const expressHbs = require("express-handlebars");
const sequelize = require("./util/database");
const session = require('express-session')
//const { v4: uuidv4 } = require("uuid");  // we gon´ use this for save our participants candidates profiles photo

//modelos de las tablas
const CandidatoModel = require("./model/Candidatos");
const puestoModel = require("./model/Puesto");
const eleccionesModel = require("./model/Elecciones");
const PartidosModel = require("./model/Partidos");
const UsuariosModel = require("./model/Usuarios");
const CiudadanosModel = require("./model/Ciudadanos");
const SeleccionModel = require("./model/Seleccion");

//helper
const compareHelpers = require('./util/helpers/hbs/compare')

app.use(session({
    secret: 'secret-key-123',
    resave: false,
    saveUninitialized: true
}))

app.engine("hbs", expressHbs.engine({ //configurando layout principal
    layoutsDir: "views/layout/",
    defaultLayout: "main-layout",
    partialsDir: path.join(__dirname, 'views/partials'),
    extname: "hbs",
    helpers: {
        equalValue: compareHelpers.EqualValue,
    },
}));

app.set("view engine", "hbs");
app.set("views", "views");




//error controller call
const errorController = require("./controller/errorController");

//routes call
const clientRoutes = require("./routes/client");
const puestoRoutes = require("./routes/puestos");
const loginRoutes = require("./routes/login");
const candidatosRoutes = require("./routes/candidatos");
const partidosRoutes = require("./routes/partidos");
const ciudadanosRoutes = require("./routes/ciudadanos");
const eleccionRoutes = require("./routes/elecciones");

app.use(express.urlencoded({ extended: false })); //Interactuar con los datos de los formularios mediante metodos HTTP

//satic path
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use(loginRoutes);
app.use(puestoRoutes)
app.use(candidatosRoutes);
app.use(partidosRoutes);
app.use(ciudadanosRoutes);
app.use(eleccionRoutes);
app.use(clientRoutes);



app.use(errorController.Get404);


//communication with DB
sequelize.sync().then(function (result) {
    //console.log(result);
}).catch(err => {
    console.log(err);
});

app.listen(port, () => {
    console.log(`Corriendo en el servidor: ${port}`)
})

