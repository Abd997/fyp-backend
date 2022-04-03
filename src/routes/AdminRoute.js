const express = require('express');
const Router = express.Router();

Router.post(express.json(), (req, res) => {
	// const { heartRate, ecg, bloodPressure, spo2, oxygenLevel } = req.body;
	// PatientCollection.create(heartRate);
	console.log(req.body);
	res.send('yes');
})

module.exports = Router
