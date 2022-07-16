const express = require("express");
const app = express();

mongoose.connect(process.env.MONGO_URL).then(
	() => {
		console.log("MONGO connected");
	},
	(err) => {
		console.log("error connecting to MONGO " + err);
	}
);

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`Server start at PORT:${port}`);
});
