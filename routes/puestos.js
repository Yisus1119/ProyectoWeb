const express = require("express");
const router = express.Router();

const puestoController = require("../controller/puestoController");

router.get("/presidentes", puestoController.getPresidenteList);
router.get("/vice", puestoController.getViceList);



module.exports = router;