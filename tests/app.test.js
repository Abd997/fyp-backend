const mongoose = require("mongoose");
const testLogin = require("./test-login");
const testPatientData = require("./test-patient-data");
const testRegistration = require("./test-registration");

describe("test backend", () => {
	const patient = {
		cnic: "123",
		email: "test@gmail.com",
		password: "password",
		heartRate: 110,
		ecg: 680,
		spo2: 50,
		bloodPressure: 90,
		temperature: 110
	};

	const doctor = {
		cnic: "124",
		email: "doctor@gmail.com",
		password: "password"
	};

	beforeAll(async () => {
		try {
			await mongoose.connect(
				"mongodb://localhost:27017/database_test"
			);
			await mongoose.connection.db.dropDatabase();
		} catch (err) {
			throw new Error("Could not connect to database");
		}
	});

	testRegistration(patient, doctor);
	testLogin(patient, doctor);
	testPatientData(doctor, patient);

	afterAll(async () => {
		await mongoose.connection.close();
	});
});
