const express = require('express');
const getDateNow = require('./getDateNow');
const app = express();

app.use('/about', (req, res, next) => {
    console.log(getDateNow());
    next();
});

app.get('/home', (req, res) => {
    console.log("-----In the Home Page-----");
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    console.log("-----In the About Page-----");
    res.send('About Page');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));