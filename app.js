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
const CiudadanosModel = require("./model/Ciudadanos");

//satic path
app.use(express.static(path.join(__dirname, "public")));


//default middleware
app.get('/', (req, res) => {
    res.send('Corriendo express!')
})

//communication with DB
sequelize.sync().then(function (result) {
    console.log(result);
}).catch(err => {
    console.log(err);
});

app.listen(port, () => {
    console.log(`Corriendo en el servidor: ${port}`)
})

