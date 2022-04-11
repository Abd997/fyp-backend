const axios = require('axios');

(async () => {
	// for (var i = 0; i < 100; i++) {
	const i = 0;
	const res = await axios.post('http://healthmonitoringbackend.herokuapp.com/v1/patientdata', {
		cnic: 13,
		heartRate: 101 + i,
		ecg: 201 - i,
		spo2: 21 + i,
		spo2: 55 + i,
		temperature: 200 - i
	})

	console.log('Request sent');
	console.log(res.data);

	// await new Promise(resolve => setTimeout(resolve, 9000));
	// }
})();