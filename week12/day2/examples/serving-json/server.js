const http = require('http');

const PORT = 3000;

const json =
{
    "menu": {
        "id": "file",
        "value": "File",
        "popup": {
            "menuitem": [
                { "value": "New", "onclick": "CreateNewDoc()" },
                { "value": "Open", "onclick": "OpenDoc()" },
                { "value": "Close", "onclick": "CloseDoc()" }
            ]
        }
    }
}

const server = http.createServer((req, res) => {

    if (req.url.toLowerCase() === '/welcome') {

        res.setHeader("Content-Type", "application/json");

        res.writeHead(200);
        res.end(JSON.stringify(json, null, 2));
    }
    else {

        res.setHeader("Content-Type", "text/html");
        res.statusCode = 200;
        res.end("<html><body><h1>Another page</h1></body></html>");
    }
});

server.listen(PORT, () => {

    console.log(`Running on http://localhost:${PORT}`);
});