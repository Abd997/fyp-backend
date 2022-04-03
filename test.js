const axios = require('axios');

(async () => {
	const res = await axios.post('http://localhost:8000/auth', {
		cnic: 13,
		password: '13',
		type: 'doctor'
	})
	
	console.log('Post request sent');
	console.log('Data recieved: ' + res.data);
})()
// (async () => {
// 	const res = await axios.post('http://localhost:8000/v1/patientdata', {
// 		cnic: 13,
// 		heartRate: 112,
// 		ecg: 112,
// 		spo2: 112,
// 		bloodPressure: 112,
// 		temperature: 112,
// 	})
	
// 	console.log('Post request sent');
// 	console.log('Data recieved: ', res.data);
// })()
	
// (async () => {
// 	await axios.get('http://localhost:8000/v1/patientdata/12')
	
// 	console.log('get request sent');
// })()