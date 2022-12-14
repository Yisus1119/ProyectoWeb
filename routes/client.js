const express = require("express");
const router = express.Router();

const clientController = require("../controller/clientController");
const loginController = require("../controller/loginClientController");

//este sera el metodo para validar la cedula
router.get("/buscar", loginController.GetLoginClient);

router.get("/", clientController.GetClientList);
router.get("/votar", clientController.GetPosicionesList);
router.post("/insertar", loginController.PostLoginClient);

//Algo cuantico
router.get("/presidentes", clientController.GetPresidentList)
router.get("/vicepresidentes", clientController.GetViceList)
router.get("/alcalde", clientController.GetAlcaldeList)
router.get("/diputado", clientController.GetDiputadoList)



module.exports = router;