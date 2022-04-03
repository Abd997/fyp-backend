const express = require('express');
const startup = require('./startup');
const app = express();
const port = process.env.PORT || 8000;

startup(app);

app.listen(port, () => {
	console.log(`Server start at PORT:${port}`)
})