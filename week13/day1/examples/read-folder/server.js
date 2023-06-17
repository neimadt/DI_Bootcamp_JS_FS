const fs = require('fs');
const path = require('path');


const directoryPath = path.join(__dirname, 'assets');

fs.readdir(__dirname, (err, files) => {

    if (err) {
        console.error(err)
        return
    }

    console.log('shallow files: ', files)
});

fs.readdir(__dirname, { recursive: true }, (err, files) => {

    if (err) {
        console.error(err)
        return
    }

    console.log('recursive files: ', files)
});

