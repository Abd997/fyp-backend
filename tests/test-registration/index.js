const testRegisterDoctor = require("./testRegisterDoctor");
const testRegisterPatient = require("./testRegisterPatient");
const testValidation = require("./testValidation");

module.exports = (data, doctor) => {
	describe("test patient registration module", () => {
		testValidation();
		testRegisterPatient(data);
		testRegisterDoctor(doctor);
	});
};
