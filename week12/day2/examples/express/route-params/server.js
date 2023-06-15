const express = require('express');

const app = express();


app.get('/tutorial/:subject?', (req, res) => {

    const { url, query, params } = req;
    const { subject } = params;
    const { p3 } = query;

    console.log("req: ", url);
    console.log("req.query: ", query);
    console.log("req.params: ", params);
    console.log("req.query.p3: ", parseInt(p3));

    if (!subject) {

        res.send(`Tutorial ???`)
    }
    else {

        res.send(`Tutorial about ${subject}!`);
    }
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));