const PatientCollection = require("../entities/PatientCollection");

module.exports = {
	findPatient: async function (email) {
		const doc = await PatientCollection.findOne({ email: email });
		if (!doc) {
			throw new Error("Patient not found");
		}
		return doc;
	},

	authenticatePatient: async function (email, password) {
		const doc = await PatientCollection.findOne({
			email: email,
			password: password
		});
		if (!doc) {
			throw new Error("Patient not registered");
		}
		return doc;
	},

	createPatient: async function (cnic, password) {
		const doc = await PatientCollection.create({
			cnic: cnic,
			password: password
		});

		return doc;
	},

	updatePatient: async function (
		cnic,
		heartRate,
		ecg,
		spo2,
		bloodPressure,
		temperature
	) {
		const result = await PatientCollection.updateOne(
			{ cnic: cnic },
			{
				heartRate: heartRate,
				ecg: ecg,
				spo2: spo2,
				bloodPressure: bloodPressure,
				temperature: temperature
			}
		);
		return result;
	}
};
