const express = require('express');
const app = express();

const PORT = 3000;

const users = [];

let _userIdCounter = 0;
const generateUniqueUserId = () => {

    _userIdCounter -= 1;

    const newId = `${Date.now()}${_userIdCounter}`;

    return newId;
};

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());


console.log('__dirname', __dirname);

app.use(express.static(__dirname + '/public'));

app.use('/loginForm', express.static(__dirname + '/pages/loginForm'));
app.use('/registerForm', express.static(__dirname + '/pages/registerForm'));

app.post('/register', (req, res) => {

    const { body: newUser } = req;

    const exists = users.some(u => u.userName === newUser.userName);

    if (exists) {

        res.statusCode = 400;
        res.json({ state: 'failed', error: `User with username "${newUser.userName}" already exists` });

        return;
    }

    newUser.id = generateUniqueUserId();

    users.push(newUser);

    console.log({ users });

    res.json({ state: 'success', newUser });
});

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});
