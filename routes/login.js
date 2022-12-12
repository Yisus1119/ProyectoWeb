const express = require("express");
const router = express.Router();

const loginController = require("../controller/loginController");

router.get("/login", loginController.GetLogin);
router.post("/entrar", loginController.Postcredentials);
router.get("/inicio", loginController.GetLandingPage);


module.exports = router;