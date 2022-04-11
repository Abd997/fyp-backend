const PatientCollection = require('../collections/PatientCollection');

const handlePostPatientData = async (req, res) => {
	const {
		cnic,
		heartRate,
		ecg,
		spo2,
		bloodPressure,
		temperature
	} = req.body;
	if (cnic === undefined) {
		return res.send('error');
	}
	const doc = await PatientCollection.findOne({ cnic: cnic });
	if (doc === null || doc.length == 0) {
		PatientCollection.create({
			cnic: cnic,
			heartRate: heartRate,
			ecg: ecg,
			spo2: spo2,
			bloodPressure: bloodPressure,
			temperature: temperature
		})
		return res.send(`Patient with cnic ${cnic} not found but has been added now`);
	}

	const result = await PatientCollection.updateOne({ cnic: cnic }, {
		heartRate: heartRate,
		ecg: ecg,
		spo2: spo2,
		bloodPressure: bloodPressure,
		temperature: temperature
	}
	)
	return res.send(`Patient with cnic ${cnic} updated`);
};

module.exports = handlePostPatientData;