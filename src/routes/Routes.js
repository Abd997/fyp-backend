const express = require('express');
const handleAuthentication = require('../controllers/handleAuthentication');
const Router = express.Router();
const handleGetPatientData = require('../controllers/handleGetPatientData');
const handlePostPatientData = require('../controllers/handlePostPatientData');

Router.post(
	'/v1/patientdata',
	express.json(),
	handlePostPatientData
);

Router.get(
	'/v1/patientdata/:cnic',
	express.json(),
	handleGetPatientData
);

Router.post(
	'/auth',
	express.json(),
	handleAuthentication
);

module.exports = Router;
