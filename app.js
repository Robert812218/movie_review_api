const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('<h1>RESPONSE FROM BACKEND SERVER</h1>');
})

app.get('/about', (req, res) => {
	res.send("<h1>RESPONSE FROM BACKEND SERVER</h1>");
});

app.listen(8000, () => {
	console.log("port listening on port 8000");
})
