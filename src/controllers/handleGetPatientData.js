const PatientCollection = require("../entities/PatientCollection");

const handleGetPatientData = async (req, res) => {
	const { cnic } = req.params;
	// console.log(cnic);
	const doc = await PatientCollection.find({ cnic: cnic });
	// console.log(doc);
	if (doc === null || doc.length == 0) {
		return res.send("<p>User not found</p>");
	}
	return res.send(`<p>${doc}</p>`);
};

module.exports = handleGetPatientData;
