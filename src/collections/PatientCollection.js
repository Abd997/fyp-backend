const mongoose = require('mongoose');
const CommonData = require('./CommonData');

const PatientSchema = new mongoose.Schema({
	...CommonData,
	heartRate: {
		type: Number,
		default: 0
	},
	ecg: {
		type: Number,
		default: 0
	},
	bloodPressure: {
		type: Number,
		default: 0
	},
	spo2: {
		type: Number,
		default: 0
	},
	temperature: {
		type: Number,
		default: 0
	},
}, { collection: 'Patient-Collection' })

const PatientCollection = mongoose.model('PatientCollection', PatientSchema);

module.exports = PatientCollection;

// PatientCollection.insertMany([
// 	{
// 		firstName: "abd",
// 		lastName: "abd",
// 		gender: "male",
// 		age: 22,
// 		cnic: 13
// 	}
// ]).then(() => console.log('inserted'))