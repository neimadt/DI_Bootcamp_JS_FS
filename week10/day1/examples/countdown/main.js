
const randomCountDown = () => {

    return new Promise(resolve => {

        const duration = ((Math.floor(Math.random() * 3)) + 1) * 1000;

        console.log(`Waiting for ${duration / 1000} seconds`);

        setTimeout(() => {

            console.log(`Done ${duration / 1000} seconds`);

            resolve();
        }, duration);
    });
};

// Promise.any([
//     randomCountDown(),
//     randomCountDown(),
//     randomCountDown(),
// ])
//     .then(() => {

//         console.log('Completed')
//     })

randomCountDown()
    .then(() => {

        return randomCountDown();
    })
    .then(() => {

        return randomCountDown();
    })
    .then(() => {

        return randomCountDown();
    })
    .then(() => {

        return randomCountDown();
    })