const mongoose 			= require('mongoose')
const CommonData 		= require('./CommonData')

const AdminSchema = new mongoose.Schema({
	...CommonData,
	password: {
		type: String,
		required: true
	}
}, { collection: 'Admin-Collection' })

const AdminCollection = mongoose.model('AdminCollection', AdminSchema)

module.exports = AdminCollection

