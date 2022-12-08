const express = require("express");
const router = express.Router();

const partidoController = require("../controller/partidoController");

router.get("/partidos", partidoController.GetPartidosList);
router.get("/partidos-form", partidoController.GetPartidosForm)
router.post("/create-partidos", partidoController.PostCreatePartidos);
router.get("/edit-partidos/:partidosId", partidoController.GetEditPartidos);
router.post("/edit-partidos", partidoController.PostEditPartidos);
router.post("/delete-partidos",partidoController.PostDeletePartidos);

module.exports = router;