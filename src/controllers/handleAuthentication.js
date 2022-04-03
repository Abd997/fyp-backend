const DoctorCollection = require('../collections/DoctorCollection');

const handleAuthentication = async (req, res) => {
	if (!checkValidity(req)) {
		return res.status(401).send("error");		
	}
	const { cnic, password, type } = req.body;

	if (type === 'doctor') {
		const doc = await DoctorCollection.findOne({ cnic: cnic });
		// console.log(doc);
		if (doc === null || doc.length == 0) {
			return res.send(`Cnic: ${cnic} not found`);
		}		
		if (doc.password != password) {
			return res.send(`Wrong password`);			
		}
	}
	res.status(200).send('Login successful');
}

const checkValidity = (req) => {
	const { cnic, password, type } = req.body;	
	if (cnic === undefined || password === undefined || type === undefined) {
		return false;
	}
	return true;
}

module.exports = handleAuthentication;