const supertest = require("supertest");
const app = require("../../src/app");

module.exports = (patient) => {
	describe("test validation", () => {
		const url = "/patient/update";
		it("returns code:400 msg:Cnic not sent", async () => {
			const res = await supertest(app).post(url).send();
			expect(res.statusCode).toBe(400);
			expect(res.body.errors[0].msg).toEqual("Cnic not sent");
		});

		it("returns code:401 msg:Patient not registered", async () => {
			const res = await supertest(app).post(url).send({
				cnic: "321"
			});
			expect(res.statusCode).toBe(401);
			expect(res.body.errors[0].msg).toEqual(
				"Patient not registered"
			);
		});
	});
};
