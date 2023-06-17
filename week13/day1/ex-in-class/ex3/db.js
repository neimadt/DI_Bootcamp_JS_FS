const knex = require('knex');
const bcrypt = require('bcrypt');


const saltRounds = 10;

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'postgres',
        password: 'supersecret',
        database: 'users'
    }
});


const createUser = async ({ name, pass }) => {

    const salt = await bcrypt.genSalt(saltRounds);

    const [result] = await db('users').insert({
        username: name,
        password: bcrypt.hashSync(pass, salt)
    }, ['*']);

    return result;
};

module.exports = {
    db,
    createUser
};
