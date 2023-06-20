const fs = require('fs/promises');
const path = require('path');
const express = require('express');


const app = express();

const PORT = 3000;

app.get('/', async (req, res) => {

    try {

        const filename = path.join(__dirname, 'assets', 'right-left.txt');

        const rawData = await fs.readFile(filename, 'utf-8');
        const rawArray = [...rawData];

        const answer = null;

        res.statusCode = 200;
        res.json({ status: 'OK', length: rawArray.length, rawArray, answer });
    }
    catch (err) {

        res.statusCode = 400;
        res.json({ status: 'FAILED', error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});
