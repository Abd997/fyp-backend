const supertest = require("supertest");
const app = require("../../src/app");

module.exports = (patient) => {
	describe("test patient data update", () => {
		const url = "/patient/update";
		it("returns code:200 msg:Patient data updated successfully", async () => {
			const res = await supertest(app).post(url).send({
				cnic: patient.cnic,
				heartRate: patient.heartRate,
				ecg: patient.ecg,
				spo2: patient.spo2,
				bloodPressure: patient.bloodPressure,
				temperature: patient.temperature
			});
			expect(res.statusCode).toBe(200);
			expect(res.body.msg).toEqual(
				"Patient data updated successfully"
			);
		});
	});
};
