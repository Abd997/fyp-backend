const mongoose = require('mongoose');
const CommonData = require('./CommonData');

const DoctorSchema = new mongoose.Schema({
	...CommonData,
	password: {
		type: String,
		required: true
	},
	assignedPatientIds: {
		type: String,
		default: 'empty'
	}
}, { collection: 'Doctor-Collection' })

const DoctorCollection = mongoose.model('DoctorCollection', DoctorSchema)

module.exports = DoctorCollection;

// DoctorCollection.insertMany([
// 	{
// 		firstName: "doctor",
// 		age: 22,
// 		cnic: 1,
// 		password: "1",
// 		assignedPatientIds: '13',
// 		dateUpdated: Date.now()
// 	}
// ]).then(() => console.log('inserted'))