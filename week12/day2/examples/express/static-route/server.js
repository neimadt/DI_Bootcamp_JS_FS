const express = require('express');
// const bodyParser = require('body-parser');
const app = express();


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    res.send('Hello');
});

app.get('/tutorial', (req, res) => {
    res.json({ course: "Javascript", school: "DevelopersInstitute" });
});

app.route('/search')
    .get((req, res) => {
        res.send(`
    <html>
    <body>
    <h1>Search</h1>
    <!-- <img src="/images/icon-have-fun.png" /> -->
    <form action="/search" method="POST">
        <label>Name</label><input name="fullName">
        <label>Adress</label><input name="Address">
        <input type="submit" value="Submit">
    </form>
    </body>
    </html>
    `);
    })
    .get((req, res) => {
        res.send(`Isn't that cool!`);
    })
    .post((req, res) => {
        console.log(req.body)
        res.send('welcome, ' + req.body.fullName)
    })

app.listen(3000, () => console.log('Example app listening on port 3000!'));