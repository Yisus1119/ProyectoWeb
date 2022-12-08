const express = require("express");
const router = express.Router();

const ciudadanoController = require("../controller/ciudadanoController");

router.get("/ciudadanos",ciudadanoController.GetCiudadanosList);
router.get("/ciudadanos-form", ciudadanoController.GetCiudadanosForm)
router.post("/create-ciudadanos", ciudadanoController.PostCreateCiudadanos);
router.get("/edit-ciudadanos/:ciudadanosId", ciudadanoController.GetEditCiudadanos);
router.post("edit-ciudadanos", ciudadanoController.PostEditCiudadanos);
router.post("/delete-ciudadanos",ciudadanoController.PostDeleteCiudadanos);


module.exports = router;