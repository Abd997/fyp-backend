const mongoose = require("mongoose");
const testLogin = require("./test-login");
const testRegistration = require("./test-registration");

describe("test backend", () => {
	const data = {
		cnic: "123",
		email: "test@gmail.com",
		password: "password"
	};

	beforeAll(async () => {
		try {
			await mongoose.connect(
				"mongodb://localhost:27017/database_test"
			);
			// console.log("Connected to database");
			await mongoose.connection.db.dropDatabase();
			// console.log("New database created");
		} catch (err) {
			throw new Error("Could not connect to database");
		}
	});

	testRegistration(data);
	testLogin(data);

	afterAll(async () => {
		await mongoose.connection.close();
	});
});
