const DoctorCollection = require("../entities/DoctorCollection");

const handleAuthentication = async (req, res) => {
	// console.log('auth route hit');
	if (!checkValidity(req)) {
		return res.status(401).send("error");
	}
	const { cnic, password, type } = req.body;

	if (type === "doctor") {
		const doc = await DoctorCollection.findOne({ cnic: cnic });
		// console.log(doc);
		if (doc === null || doc.length == 0) {
			return res.status(401).send(`Cnic: ${cnic} not found`);
		}
		if (doc.password != password) {
			return res.status(401).send(`Wrong password`);
		}
	}
	res.status(200).send("Login successful");
};

const checkValidity = (req) => {
	const { cnic, password, type } = req.body;
	if (
		cnic === undefined ||
		password === undefined ||
		type === undefined
	) {
		return false;
	}
	return true;
};

module.exports = handleAuthentication;
