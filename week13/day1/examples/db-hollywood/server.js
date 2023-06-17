const express = require('express');
const knex = require('knex');


const app = express();

const PORT = 3000;

app.get('/api/actors', async (req, res) => {

    try {

        const actors = await db.select('*').from('actors').where({
            fullname: 'Matt Damon'
        });
        console.log(actors);

        res.json(actors);
    }
    catch (err) {

        console.error('Error selecting actors', err);
    }

    // db.select('fullname').from('actors')
    //     .then(actors => {

    //         console.log(actors);
    //         res.json(actors);
    //     })
    //     .catch(err => {

    //         console.error('Error selecting actors', err);
    //     });
});

app.get('/api/actors/create', async (req, res) => {

    try {

        const actors = await db('actors')
            // .returning(['actor_id', 'fullname'])
            .insert([{ fullname: 'Actor1 LActor1' }, { fullname: 'Actor2 LActor2' }], ['actor_id', 'fullname'])

        res.send(actors);
    }
    catch (err) {

        console.error(err);
    }
});

app.get('/api/movies', async (req, res) => {

    try {

        // const movies = await db.select().from('movies').where({
        //     movie_title: 'The Martian',
        //     released_date: '2015-09-11'
        // });

        const movies = await db.select().from('movies')
            .where({
                movie_title: 'The Martian',
            })
            .orWhere({
                released_date: '2004-12-10'
            });

        res.json(movies);
    }
    catch (err) {

        console.error('Error selecting movies', err);
    }
});

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'supersecret',
        database: 'hollywood',
        port: 5432
    },
});

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});
