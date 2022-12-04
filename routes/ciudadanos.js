const express = require("express");
const router = express.Router();

const ciudadanoController = require("../controller/ciudadanoController");

router.get("/ciudadanos", ciudadanoController.GetCiudadanosList);
router.get("/create-ciudadanos", ciudadanoController.GetCreateCiudadanos);


module.exports = router;