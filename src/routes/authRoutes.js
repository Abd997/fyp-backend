const express = require("express");
const Router = express.Router();
const handleAuthentication = require("../controllers/handleAuthentication");
const handleDoctorGetPatients = require("../controllers/handleDoctorGetPatients");
const handleDoctorGetPatientData = require("../controllers/handleDoctorGetPatientData");
const handleGetPatientData = require("../controllers/handleGetPatientData");
const handlePostPatientData = require("../controllers/handlePostPatientData");

Router.post("/v1/patientdata", express.json(), handlePostPatientData);

Router.get("/v1/patientdata/:cnic", handleGetPatientData);

Router.use("/auth", handleAuthentication);

Router.get("/doctor/:doctorId/patients", handleDoctorGetPatients);

Router.get(
	"/doctor/:doctorId/patient/:patientId",
	handleDoctorGetPatientData
);

module.exports = Router;
