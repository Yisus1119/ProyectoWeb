const express = require("express");
const router = express.Router();

const puestoController = require("../controller/puestoController");

router.get("/puestos", puestoController.GetPuestosList);
router.get("/create-puestos", puestoController.GetCreatePuestos);
router.get("/create-puestos", puestoController.PostCreatePuestos);
router.get("/edit-puestos/:puestosId", puestoController.GetEditPuestos);
router.get("/edit-puestos", puestoController.PostEditPuestos);
router.get("/delete-puestos", puestoController.PostDeletePuestos);

module.exports = router;