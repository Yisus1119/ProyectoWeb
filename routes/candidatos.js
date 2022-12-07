const express = require("express");
const router = express.Router();

const candidatoController = require("../controller/candidatoController");

router.get("/candidatos", candidatoController.GetCandidatosList);
router.get("/create-candidatos", candidatoController.GetCandidatoForm)
router.get("/create-candidatos", candidatoController.PostCreateCandidatos)
router.get("/edit-candidatos/:candidatosId", candidatoController.GetEditCandidatos)
router.get("/edit-candidatos", candidatoController.PostEditCandidatos)
router.get("/delete-candidatos", candidatoController.PostDeleteCandidatos)



module.exports = router;