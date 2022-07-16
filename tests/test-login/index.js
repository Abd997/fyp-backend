const testDoctorLogin = require("./testDoctorLogin");
const testValidator = require("./testValidator");

module.exports = (patient, doctor) => {
	describe("test login module", () => {
		testValidator(doctor);
		testDoctorLogin(doctor);
	});
};
