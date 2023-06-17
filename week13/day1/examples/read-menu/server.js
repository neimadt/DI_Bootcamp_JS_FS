const fs = require('fs');
const path = require('path');





const readFileAsync = (fileName, options) => {

    return new Promise((resolve, reject) => {

        fs.readFile(fileName, options, (err, data) => {

            if (err) {
                reject(err);
            }
            else {

                resolve(data);
            }
        });
    });
};

const fileName = path.join(__dirname, 'assets', 'menu.txt');
console.log('__dirname', __dirname);
console.log('fileName', fileName);

(async () => {

    try {

        const data = await readFileAsync(fileName, 'utf-8');

        console.log(data);
    }
    catch (err) {
        console.error(err);
    }
})()

// readFileAsync(fileName, 'utf8')
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.error(err);
//     })

// fs.readFile(fileName, 'utf-8', (err, data) => {

//     if (err) {

//         console.error(err);
//         return
//     }

//     console.log(data);
// });

console.log("-----Restaurant Menu---------", '\n',);