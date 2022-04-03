const express = require('express');
const mongoose = require('mongoose');
const Routes = require('./routes/Routes');
const AdminRoute = require('./routes/AdminRoute');
const mongoose_url = 'mongodb://localhost/practice-database';

const startup = (app) => {
	
	// -------- DATABASE ---------
	mongoose.connect(mongoose_url).then(
		() => { console.log('database connected'); },
		err => { console.log('error connecting to database'); }
	);
	
	// -------- MIDDLEWARES ---------
	// app.use(express.urlencoded({ extended: true }));

	// -------- ROUTES ---------
	app.use(Routes);
}

module.exports = startup;