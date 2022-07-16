const supertest = require("supertest");
const app = require("../../src/app");

module.exports = (data) => {
	describe("Test login validator", () => {
		const url = "/patient/login";
		it("returns code:400 msg:Cnic not sent", async () => {
			const res = await supertest(app).post(url).send({
				password: data.password
			});
			expect(res.statusCode).toBe(400);
			expect(res.body.errors[0].msg).toEqual("Cnic not sent");
		});
	});
};
