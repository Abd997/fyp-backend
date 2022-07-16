const DoctorCollection = require("../entities/DoctorCollection");

module.exports = {
	findDoctor: async function (cnic) {
		const doc = await DoctorCollection.findOne({ cnic });
		if (!doc) {
			throw new Error("Doctor not found");
		}
		return doc;
	},

	authenticateDoctor: async function (cnic, password) {
		const doc = await DoctorCollection.findOne({
			cnic,
			password
		});
		if (!doc) {
			throw new Error("Doctor not registered");
		}
		return doc;
	},

	createDoctor: async function (cnic, password) {
		const doc = await DoctorCollection.create({
			cnic,
			password
		});

		return doc;
	}
};
