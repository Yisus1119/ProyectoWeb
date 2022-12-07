const express = require("express");
const router = express.Router();

const candidatoController = require("../controller/candidatoController");

router.get("/candidatos", candidatoController.GetCandidatosList);
router.get("/create-candidatos", candidatoController.GetCandidatoForm)




module.exports = router;