const e = require("express");
const sendErrorResponse = require("../utils/sendErrorResponse");
const jwt = require("jsonwebtoken");
const DoctorRepo = require("../repository/DoctorRepo");
require("dotenv").config();

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 */
module.exports = async (req, res) => {
	const { cnic, password } = req.body;
	try {
		const user = await DoctorRepo.authenticateDoctor(cnic, password);
		if (!user) {
			return sendErrorResponse(res, 401, "User not found");
		}
		const token = jwt.sign(cnic, process.env.JWT_SIGN_SECRET);
		res.status(200).json({
			msg: "Doctor successfully authenticated",
			token: token
		});
	} catch (err) {
		return sendErrorResponse(res, 500, "Internal error");
	}
};
