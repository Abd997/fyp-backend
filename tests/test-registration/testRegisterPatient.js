const supertest = require("supertest");
const app = require("../../src/app");

module.exports = (data) => {
	describe("test register patient", () => {
		const url = "/admin/register/patient";
		it("returns code:201 msg:User created successfully", async () => {
			const res = await supertest(app).post(url).send({
				cnic: data.cnic,
				email: data.email,
				password: data.password
			});
			expect(res.statusCode).toBe(201);
			expect(res.body.msg).toEqual("User successfully created");
		});
	});
};
