const express = require('express');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => res.send('<html><body><b>Hello World!</b></body></html>'));
app.get('/welcome', (req, res) => res.send('<html><body><b>Welcome!</b></body></html>'));
app.get('*', (req, res) => res.send('<html><body><b>404<br/>NOT FOUND!</b></body></html>'));

app.listen(PORT, () => {

    console.log(`Running on http://localhost:${PORT}`);
});