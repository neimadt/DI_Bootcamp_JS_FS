const p = new Promise((resolve, reject) => {

    if (true) {

        resolve('hello world');
    }
    else {

        reject('error');
    }
});

p
    .then((result) => {
        // console.log(result);
        return result + "!";
    })
    .then((result1) => {
        return result1 + "?";
    })
    .then(result2 => {
        return result2 + "#";
    })
    .then(result3 => {
        console.log(result3);
    })
    .catch(err => {

    });