const fs = require('fs');
const path = require('path');
const express = require('express');


const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {

    const filename = path.join(__dirname, 'pages', 'index.html');

    fs.readFile(filename, 'utf8', (err, content) => {

        if (err) {

            res.statusCode = 400;
            res.send();
        }
        else {

            res.statusCode = 200;
            res.send(content);
        }
    });
});

app.get('/api/users', (req, res) => {

    const filename = path.join(__dirname, 'db', 'user.json');

    fs.readFile(filename, 'utf8', (err, data) => {

        if (err) {

            console.error(err);

            res.statusCode = 400;
            res.send();
            return;
        }

        const users = data
            ? JSON.parse(data)
            : [];

        res.json({ users });
    });
});

app.post('/api/user', (req, res) => {

    const filename = path.join(__dirname, 'db', 'user.json');

    fs.readFile(filename, 'utf8', (err, data) => {

        if (err) {

            console.error(err);

            res.statusCode = 400;
            res.send();
            return;
        }

        const users = data
            ? JSON.parse(data)
            : [];

        const { body: newUser } = req;

        users.push(newUser);

        fs.writeFile(filename, JSON.stringify(users, null, 2), err => {

            if (err) {

                res.statusCode = 400;
                res.send();
                return;
            }

            res.send({ status: 'OK' });
        });
    });
});


app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});
