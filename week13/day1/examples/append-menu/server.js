const fs = require('fs');
const path = require('path');


const fileName = path.join(__dirname, 'assets', 'menu.txt');

const newContent = 'Caesar  Salad';
fs.appendFile(fileName, newContent + '\n', (err) => {
    if (err) {
        console.error(err)
    }
    else {

        console.log('Append operation complete.');

        fs.readFile(fileName, 'utf-8', (err, data) => {

            if (err) {

                console.error(err);
                return
            }

            console.log(data);
        });
    }
});

console.log("-----Restaurant Menu---------", '\n',);