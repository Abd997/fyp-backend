const PatientCollection = require("../entities/PatientCollection");

const handleDoctorGetPatients = (req, res) => {
	const { doctorId } = req.params;
	const doc = DoctorCollection.findOne({ cnic: id });
	if (doc == null || doc.length == 0) {
		return res.status(401).send("not found");
	}
	res.status(200).send("login");
};

module.exports = handleDoctorGetPatients;
