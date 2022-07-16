const supertest = require("supertest");
const app = require("../../src/app");

module.exports = (doctor, patient) => {
	describe("test patient data retrieve", () => {
		const url = "/patient/retrieve";
		it("returns code:200 with data object", async () => {
			const resAuth = await supertest(app)
				.post("/doctor/login")
				.send({
					cnic: doctor.cnic,
					password: doctor.password
				});
			const res = await supertest(app)
				.post(url)
				.send({
					cnic: patient.cnic
				})
				.set("Authorization", `Bearer ${resAuth.body.token}`);
			expect(res.statusCode).toBe(200);
			expect(res.body.heartRate).toEqual(patient.heartRate);
			expect(res.body.ecg).toEqual(patient.ecg);
			expect(res.body.spo2).toEqual(patient.spo2);
			expect(res.body.bloodPressure).toEqual(patient.bloodPressure);
			expect(res.body.temperature).toEqual(patient.temperature);
		});
	});
};
