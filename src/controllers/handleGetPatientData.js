const PatientCollection = require("../collections/PatientCollection");

const handleGetPatientData = async (req, res) => {
	const {cnic} = req.body;
	const doc = await PatientCollection.find({ cnic: cnic });
	res.send(`<p>${doc}</p>`);
}

module.exports = handleGetPatientData;