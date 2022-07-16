const e = require("express");
const PatientRepo = require("../repository/PatientRepo");
const sendErrorResponse = require("../utils/sendErrorResponse");

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 */
module.exports = async (req, res) => {
	try {
		const { cnic, heartRate, ecg, spo2, bloodPressure, temperature } =
			req.body;
		const doc = await PatientRepo.findPatient(cnic);
		if (!doc) {
			return sendErrorResponse(res, 401, "Patient not registered");
		}
		await PatientRepo.updatePatient(
			cnic,
			heartRate,
			ecg,
			spo2,
			bloodPressure,
			temperature
		);
		return res.send({ msg: "Patient data updated successfully" });
	} catch (err) {
		return sendErrorResponse(
			res,
			500,
			"Could not update patient data"
		);
	}
};
