const express = require("express");
const router = express.Router();

const puestoController = require("../controller/puestoController");

router.get("/puestos", puestoController.GetPuestosList);
router.get("/puestos-form", puestoController.GetPuestosForm)
router.post("/create-puestos", puestoController.PostCreatePuestos);
router.get("/edit-puestos/:puestosId", puestoController.GetEditPuestos);
router.post("/edit-puestos", puestoController.PostEditPuestos);
router.post("/delete-puestos", puestoController.PostDeletePuestos);

module.exports = router;