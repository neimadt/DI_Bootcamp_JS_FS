const flip = () => {

    const x = (Math.floor(Math.random() * 3));


    switch (x) {

        case 0:
            return false;

        case 1:
            return "heads";

        case 2:
            return 'tails';
    }
};

const flipACoin = new Promise((resolve, reject) => {

    console.log("I'm about to flip a coin!");


    const flipDuration = ((Math.floor(Math.random() * 2)) + 1) * 1000;

    setTimeout(() => {

        const flipResult = flip();

        if (flipResult) {

            resolve(flipResult);
        }
        else {

            reject(new Error('Landed on the edge'));
        }
    }, flipDuration);
});


flipACoin
    .then((result) => {

        console.log(`It's ${result}!`, flipACoin);

        return 'Done';
    })
    .then((result) => {

        console.log(result, flipACoin);
    })
    .catch((err) => {

        console.error("It failed", err);
    })

console.log("the coin is in the air!", flipACoin);
