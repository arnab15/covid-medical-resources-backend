const express = require("express");

const { googleLogin } = require("../controllers/authController");

const router = express.Router();

router.post("/googlelogin", googleLogin);

module.exports = router;
