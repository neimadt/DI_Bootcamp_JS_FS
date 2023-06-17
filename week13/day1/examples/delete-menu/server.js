const fs = require('fs');
const path = require('path');


const fileName = path.join(__dirname, 'assets', 'menu.txt');

fs.unlink(fileName, err => {

    if (err) {
        console.error(err);
        return
    }

    console.log('Menu gone...');
});

console.log("-----Restaurant Menu---------", '\n',);