const e = require("express");
const jwt = require("jsonwebtoken");
const sendErrorResponse = require("./sendErrorResponse");
require("dotenv").config();

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @param {e.NextFunction} next
 */
module.exports = async (req, res, next) => {
	try {
		const bearerHeader = req.headers["authorization"];

		if (typeof bearerHeader === "undefined") {
			return sendErrorResponse(res, 401, "Token not sent");
		}

		const token = bearerHeader.split(" ")[1];
		await jwt.verify(token, process.env.JWT_SIGN_SECRET);

		next();
	} catch (err) {
		return sendErrorResponse(res, 500, "Could not verify token");
	}
};
