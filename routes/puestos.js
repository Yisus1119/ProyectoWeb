const express = require("express");
const router = express.Router();

const puestoController = require("../controller/puestoController");

router.get("/puestos", puestoController.GetPuestosList);
router.get("/crete-puestos", puestoController.GetCreatePuestos);
router.get("/presidentes", puestoController.getPresidenteList);
router.get("/vice", puestoController.getViceList);
router.get("/alcalde", puestoController.getAlcaldeList);
router.get("/diputado", puestoController.getDiputadoList);

module.exports = router;