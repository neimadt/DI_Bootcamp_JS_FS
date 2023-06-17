const fs = require('fs');
const path = require('path');


const fileName = path.join(__dirname, 'assets', 'menu.txt');

const newContent = 'House Salad';
fs.writeFile(fileName, newContent, (err) => {
    if (err) {
        console.error(err)
    }
    else {
        console.log('Write operation complete.');
    }
});

fs.readFile(fileName, 'utf-8', (err, data) => {

    if (err) {

        console.error(err);
        return
    }

    console.log(data);
});

console.log("-----Restaurant Menu---------", '\n',);