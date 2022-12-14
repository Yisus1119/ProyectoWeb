const express = require("express");
const router = express.Router();

const elecciones = require("../controller/eleccionesController");

router.get("/elecciones",elecciones.GetEleccionesList);
router.get("/elecform", elecciones.GetEleccionesForm);
router.post("/conelpicoasi", elecciones.PostCreateElecciones);


module.exports = router;