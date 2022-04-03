const express = require('express');
const startup = require('./startup');
const app = express();
const port = 8000;

startup(app);

app.listen(port, () => {
	console.log(`Server start at PORT:${port}`)
})