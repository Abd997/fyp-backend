const reqString = {
	type: String,
	required: true,
	default: 'empty'
}

const CommonData = {
	dataCreated: {
		type: Date,
		default: Date.now(),
		required: true
	},
	dataUpdated: {
		type: Date,
	},
	firstName: reqString,
	lastName: reqString,
	email: reqString,
	phone: reqString,
	gender: reqString,
	age: reqString,
	cnic: {
		type: Number,
		required: true,
		unique: true
	}
};

module.exports = CommonData;