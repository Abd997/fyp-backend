const express = require('express');
const Router = express.Router();
const handleAuthentication = require('../controllers/handleAuthentication');
const handleGetPatientData = require('../controllers/handleGetPatientData');
const handlePostPatientData = require('../controllers/handlePostPatientData');

Router.get('/', (req, res) => {
	res.send("<h1>App running</h1>");
})

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
