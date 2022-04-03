const mongoose 			= require('mongoose')
const CommonData 		= require('./CommonData')

const DoctorSchema = new mongoose.Schema({
	...CommonData,
	password: {
		type: String,
		required: true
	},
	AssignedPatientIds: {
		type: Number
	}
}, { collection: 'Doctor-Collection' })

const DoctorCollection = mongoose.model('DoctorCollection', DoctorSchema)

module.exports = DoctorCollection;

// DoctorCollection.insertMany([
// 	{
// 		firstName: "abd",
// 		lastName: "abd",
// 		gender: "male",
// 		age: 22,
// 		cnic: 13,
// 		password: "13"
// 	}
// ]).then(() => console.log('inserted'))