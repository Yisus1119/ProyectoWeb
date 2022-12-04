const express = require("express");
const router = express.Router();

const clientController = require("../controller/clientController");

router.get("/", clientController.GetClientList);
router.get("/votar", clientController.GetPosicionesList);


module.exports = router;