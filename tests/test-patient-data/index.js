const testRetrieve = require("./testRetrieve");
const testUpdate = require("./testUpdate");
const testValidation = require("./testValidation");

module.exports = (patient) => {
	describe("test patient data module", () => {
		testValidation();
		testUpdate(patient);
		testRetrieve(patient);
	});
};
