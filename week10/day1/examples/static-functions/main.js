
// Promise.reject()
//     .then(() => {

//         console.log('resolved')
//     })
//     .catch(() => {

//         console.error('rejected')
//     })


// console.log('Promise started');


const resolvingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved result");
    }, 2000);
});

const rejectingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("rejected result");
    }, 2000);
});


rejectingPromise.catch((result) => {
    console.log(`catch! + ${result}`);
});

resolvingPromise.then((result) => {
    console.log(`then! + ${result}`);
});

resolvingPromise.finally((result) => {
    console.log(`finally! + ${result}`);
});