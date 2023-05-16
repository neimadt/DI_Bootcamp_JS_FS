
function getMeat() {

    const promise = new Promise((resolve, reject) => {

        console.log("walking to the butcher...");

        setTimeout(() => {

            console.log("got the meat...");
            resolve('beef');
        }, 2000);
    });

    return promise;
}

function getBuns() {

    const promise = new Promise((resolve, reject) => {

        console.log("getting the buns from the bakery");

        setTimeout(() => {

            console.log("got the buns...");
            resolve('whole grain');
        }, 1000);
    });

    return promise;
}

function makeBurger(meatType, bunsType) {

    const promise = new Promise((resolve, reject) => {

        console.log("preparing the burger...");

        setTimeout(() => {

            resolve(`The ${meatType} burger with ${bunsType} buns is created`);
        }, 1000);
    });

    return promise;
}

Promise.all([
    getMeat(),
    getBuns()
])
    // .then(meatType => {

    //     return 
    //         .then(bunsType => {

    //             return [meatType, bunsType]
    //         });
    // })
    .then(([meatType, bunsType]) => {

        return makeBurger(meatType, bunsType);
    })
    .then(burger => {

        console.log(burger);
    });


// let goodGrades = 83;

// let endSemester = new Promise(function (resolve, reject) {

//     if (goodGrades > 90) {

//         resolve("Computer");
//     }
//     else if (goodGrades > 80 && goodGrades <= 89) {
//         resolve("Phone");
//     }
//     else {
//         reject("I won't get the gift");
//     }
// });


// endSemester.then(function (value) {
//     console.log("I got an amazing gift : A ", value);
// });

// endSemester.catch(function (value) {
//     console.error("Booo", value);
// });

// endSemester.finally(function () {
//     console.log(`No matter if I get a gift or not, I want to have good grades`);
// });

// // console.log(endSemester)

// const promise = new Promise(resolve => {

//     setTimeout(() => {
//         resolve(true);
//     }, 500);
// });

// promise
//     .then(value => {

//         console.log(`Then 1 Result: ${value}`);

//         return 'proceed';
//     })
//     .then(value => {

//         console.log(`Then 2 Result: ${value}`);

//         return new Promise(resolve => {

//             setTimeout(() => {

//                 resolve('Thank you for waiting');
//             }, 1000);
//         });
//     })
//     .then(value => {

//         console.log(`Then 3 Result: ${value}`);

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {

//                 reject('Something went wrong');
//                 // resolve('Nothing wrong');
//             }, 2000);
//         });
//     })
//     .then(value => {

//         console.log('All good', value);
//     })
//     .catch(err => {

//         console.error('Not good,', err);
//     })
//     .then(value => {

//         console.log('And on...');
//     })
