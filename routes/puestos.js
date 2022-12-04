const express = require("express");
const router = express.Router();

const puestoController = require("../controller/puestoController");

router.get("/puestos", puestoController.GetPuestosList);
router.get("/crete-puestos", puestoController.GetCreatePuestos);


module.exports = router;