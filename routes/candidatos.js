const express = require("express");
const router = express.Router();

const candidatoController = require("../controller/candidatoController");

router.get("/candidatos", candidatoController.GetCandidatosList);
router.get("/form-candidatos", candidatoController.GetCandidatoForm)
router.post("/create-candidatos", candidatoController.PostCreateCandidatos)
router.get("/edit-candidatos/:candidatosId", candidatoController.GetEditCandidatos)
router.get("/edit-candidatos", candidatoController.PostEditCandidatos)
router.post("/delete-candidatos", candidatoController.PostDeleteCandidatos)



module.exports = router;