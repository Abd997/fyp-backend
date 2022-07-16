const PatientCollection = require("../entities/PatientCollection");

const handleDoctorGetPatientData = async (req, res) => {
	const { patientId } = req.params;
	const doc = await PatientCollection.findOne({ cnic: patientId });
	if (doc === null || doc.length == 0) {
		return res.status(401).send("patient not found");
	}
	// console.log(doc);
	res.status(200).send(doc);
};

module.exports = handleDoctorGetPatientData;
