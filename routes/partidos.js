const express = require("express");
const router = express.Router();

const partidoController = require("../controller/partidoController");

router.get("/partidos", partidoController.GetPartidosList);
router.get("/create-partidos", partidoController.GetCreatePartidos);


module.exports = router;