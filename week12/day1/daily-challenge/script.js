const http = require("http");
const getDateNow = require('./main');


const server = http.createServer(function (req, res) {


    const html = `
    <!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
</head>

<body>
    <h1>${getDateNow()}</h1>
</body>

</html>
    `;

    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.end(html);
});

server.listen(3000, () => {

    console.log('Running on http://localhost:3000');
});
