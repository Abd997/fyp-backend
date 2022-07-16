const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const userLogin = require("./user-login");
const patientData = require("./patient-data");

app.use(express.json());

app.use(authRoutes);

app.use("/admin", adminRoutes);

app.post(
	"/doctor/login",
	userLogin.validateReq,
	userLogin.loginDoctor
);

app.post(
	"/patient/update",
	patientData.validateReq,
	patientData.update
);

app.post(
	"/patient/retrieve",
	patientData.validateReq,
	patientData.retrieve
);

app.use("/", (req, res) => {
	res.send("<h1>App running</h1>");
});

app.use("*", (req, res) => {
	res.status(404).send("<h1>404 route not found</h1>");
});

module.exports = app;
