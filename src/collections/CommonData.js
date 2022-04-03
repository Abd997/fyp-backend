const reqString = {
	type: String,
	required: true
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
	email: {
		type: String,
	},
	phone: {
		type: Number
	},
	gender: reqString,
	age: {
		type: Number,
		required: true
	},
	cnic: {
		type: Number,
		required: true,
		unique: true
	}
};

module.exports = CommonData;