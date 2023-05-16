const makeBurger = (callback) => {

    getMeat((meatType) => {
        getBuns((bunsType) => {
            putMeatBetwenBuns(bunsType, meatType, (burger) => {
                callback(burger);
            });
        });
    });
};

function getMeat(callback) {

    console.log("walking to the butcher...");

    setTimeout(() => {
        console.log("getting the beef from the butcher");

        callback('beef');
    }, 2000);
}

function getBuns(callback) {

    console.log("getting the buns from the bakery");
    callback("whole grain");
}


function putMeatBetwenBuns(bunsType, meatType, callback) {

    console.log(`creating the ${meatType} burger with ${bunsType} buns`);

    callback('Delicious Burger');
};

makeBurger((burger) => {

    console.log(burger);
});