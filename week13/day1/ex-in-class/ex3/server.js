const exp = require('express');
const { db, createUser } = require('./db.js')
const bcrypt = require('bcrypt');

const app = exp();

app.use(exp.urlencoded({ extended: false }));
app.use(exp.json());

app.use('/', exp.static(__dirname + '/public'));

app.post('/user', (req, res) => {

    createUser(req.body)
        .then(data => {
            res.send({ status: 'OK' })
        })
        .catch(err => {
            res.send({ status: err.detail })
        })
})

app.get('/show', (req, res) => {
    db('users')
        .select('name')
        .then(data => {
            console.log(data);
            res.send(data)
        })
        .catch(err => {
            console.log(err);
            res.send({ message: err.detail })
        })
})

app.post('/find', (req, res) => {

    console.log(req.body);

    const { name, pass } = req.body;

    db('users')
        .select('id', 'name', 'password')
        .where({ name })
        .then(data => {
            console.log(data);
            if (data.length > 0) {

                if (bcrypt.compareSync(pass, data[0].password)) {

                    res.send({ message: `Welcome ${data[0].name}` })
                }
                else {
                    res.send({ message: 'Wrong password' })
                }
            }
            else {
                res.send({ message: 'Not Found' })
            }
        })
        .catch(err => {
            console.log(err);
            res.send({ message: err.detail })
        })
})



app.listen(3000)