const e = require("express");
const { body, validationResult } = require("express-validator");
const sendErrorResponse = require("../utils/sendErrorResponse");

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 */
const validate = (req, res, next) => {
	const errs = validationResult(req);
	if (!errs.isEmpty()) {
		return sendErrorResponse(res, 400, errs.array());
	}

	next();
};

module.exports = [
	body("cnic")
		.exists({ checkFalsy: true })
		.withMessage("Cnic not sent"),
	body("password")
		.exists({ checkFalsy: true })
		.withMessage("Password not provided"),
	validate
];
