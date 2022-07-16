const testRetrieve = require("./testRetrieve");
const testUpdate = require("./testUpdate");
const testValidation = require("./testValidation");

module.exports = (doctor, patient) => {
	describe("test patient data module", () => {
		testValidation();
		testUpdate(patient);
		testRetrieve(doctor, patient);
	});
};
