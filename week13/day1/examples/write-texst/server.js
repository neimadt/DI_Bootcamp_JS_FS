const fs = require('fs');
const path = require('path');


const fileName = path.join(__dirname, 'test.txt');

fs.writeFile(fileName, 'Hello World!', err => {

    if (err) {

        console.log(err);
    }
    else {

        console.log('Write operation complete.');
    }
});
