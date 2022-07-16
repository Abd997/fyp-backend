const supertest = require("supertest");
const app = require("../../src/app");

module.exports = (doctor) => {
	describe("test doctor login", () => {
		const url = "/doctor/login";
		it("returns code:200 msg:Doctor successfully authenticated", async () => {
			const res = await supertest(app).post(url).send({
				cnic: doctor.cnic,
				password: doctor.password
			});
			expect(res.statusCode).toBe(200);
			expect(res.body.msg).toEqual(
				"Doctor successfully authenticated"
			);
		});
	});
};
