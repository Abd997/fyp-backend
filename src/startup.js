const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const Routes = require('./routes/Routes');
const AdminRoute = require('./routes/AdminRoute');
console.log('MONGO Link: ' + process.env.MONGO_URL);
const mongoose_url = process.env.MONGO_URL;

const startup = (app) => {
	
	// -------- DATABASE ---------
	mongoose.connect(mongoose_url).then(
		() => { console.log('MONGO connected'); },
		err => { console.log('error connecting to MONGO ' + err); }
	);
	
	// -------- MIDDLEWARES ---------
	// app.use(express.urlencoded({ extended: true }));

	// -------- ROUTES ---------
	app.use(Routes);
}

module.exports = startup;