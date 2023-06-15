const http = require('http');


const PORT = 3000;

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>');

    switch (req.url) {

        case '/welcome': {

            res.write('Welcome new <b>user</b>');
        } break;

        default: {

            res.end('Another page');
        } break;
    }

    res.write('</p></body></html>');
    res.end();
});

server.listen(PORT, () => {

    console.log(`Running on http://localhost:${PORT}`);
});