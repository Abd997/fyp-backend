const testRegisterPatient = require("./testRegisterPatient");
const testValidation = require("./testValidation");

module.exports = (data) => {
	describe("test patient registration module", () => {
		testValidation();
		testRegisterPatient(data);
	});
};
