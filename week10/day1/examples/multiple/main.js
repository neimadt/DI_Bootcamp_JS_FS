const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("result1");
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("result2");
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("result3");
    }, 3000);
});

// Promise.all([promise1, promise2, promise3])
//     .then((results) => {
//         console.log(results);
//     }).catch((error) => {
//         console.error(error);
//     });

// Promise.allSettled([promise1, promise2, promise3])
//     .then((results) => {
//         console.log(results);
//         // results.map(r => {
//         //   console.log(`{ status: ${r.status}, value: ${r.value}, reason: ${r.reason} }`);
//         // })
//     })

Promise.race([promise1, promise2, promise3])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.error(error);
    });