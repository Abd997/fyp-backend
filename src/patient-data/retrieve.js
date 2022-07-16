const e = require("express");
const PatientRepo = require("../repository/PatientRepo");
const sendErrorResponse = require("../utils/sendErrorResponse");

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 */
module.exports = async (req, res) => {
	const { cnic } = req.body;
	try {
		const doc = await PatientRepo.findPatient(cnic);
		if (!doc || doc === null || doc.length == 0) {
			return sendErrorResponse(res, 401, "Patient not registered");
		}
		res.status(200).send(doc);
	} catch (err) {
		return sendErrorResponse(res, 500, "Internal error");
	}
};
