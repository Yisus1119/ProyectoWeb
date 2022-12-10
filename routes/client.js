const express = require("express");
const router = express.Router();

const clientController = require("../controller/clientController");

router.get("/", clientController.GetClientList);
router.get("/votar", clientController.GetPosicionesList);
router.get("/presidentes", clientController.GetPresidentList)
router.get("/vicepresidentes", clientController.GetViceList)
router.get("/alcalde", clientController.GetAlcaldeList)
router.get("/diputado", clientController.GetDiputadoList)


module.exports = router;