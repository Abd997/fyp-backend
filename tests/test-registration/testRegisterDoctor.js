const supertest = require("supertest");
const app = require("../../src/app");

module.exports = (doctor) => {
	describe("test register doctor", () => {
		const url = "/admin/register/doctor";
		it("returns code:201 msg:User successfully created", async () => {
			const res = await supertest(app).post(url).send({
				cnic: doctor.cnic,
				email: doctor.email,
				password: doctor.password
			});
			expect(res.statusCode).toBe(201);
			expect(res.body.msg).toEqual("User successfully created");
		});
	});
};
