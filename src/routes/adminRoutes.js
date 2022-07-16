const express = require("express");
const userRegistration = require("../user-registration");
const router = express.Router();

router.post(
	"/register/patient",
	userRegistration.validateReq,
	userRegistration.registerPatient
);

module.exports = router;
