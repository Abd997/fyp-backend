const e = require("express");
const DoctorRepo = require("../repository/DoctorRepo");
const sendErrorResponse = require("../utils/sendErrorResponse");

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 */
module.exports = async (req, res) => {
	const { cnic, password } = req.body;
	try {
		const newUser = await DoctorRepo.createDoctor(cnic, password);
		res.status(201).json({
			msg: "User successfully created"
		});
	} catch (err) {
		sendErrorResponse(500, res, "User not created");
	}
};
