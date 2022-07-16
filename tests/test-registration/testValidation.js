const supertest = require("supertest");
const app = require("../../src/app");

module.exports = () => {
	describe("test registration request validation", () => {
		const url = "/admin/register/patient";
		it("return code:400 msg:Cnic not provided", async () => {
			const response = await supertest(app).post(url).send({
				password: "password"
			});

			expect(response.statusCode).toBe(400);
			expect(response.body.errors[0].msg).toEqual(
				"Cnic not provided"
			);
		});

		it("return code:400 msg:Password not provided", async () => {
			const response = await supertest(app).post(url).send({
				cnic: "123"
			});

			expect(response.statusCode).toBe(400);
			expect(response.body.errors[0].msg).toEqual(
				"Password not provided"
			);
		});
	});
};
