const testValidator = require("./testValidator");

module.exports = (data) => {
	describe("test login module", () => {
		testValidator(data);
	});
};
