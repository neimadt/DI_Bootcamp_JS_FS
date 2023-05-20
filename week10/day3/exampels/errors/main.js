let goodGrades = 93;

let endSemester = new Promise((resolve, reject) => {

    if (goodGrades > 90) {

        resolve("Computer");
    }
    else if (goodGrades => 80 && goodGrades <= 89) {

        resolve("Phone");
    }
    else {

        reject("I won't get the gift");
    }
})

const checkRequest = async () => {

    console.log('checking...');

    try {

        // const value = await endSemester
        // her;
        // console.log("I got an amazing gift : A ", value);

        endSemester
            .then(value => {
                hey;
                console.log("I got an amazing gift : A ", value);
            })
            // .catch(err => {

            //     console.log("In the good catch", err)
            // });
    }
    catch (err) {

        console.log("In the catch ", err)
    }

    console.log('Im out!');
}

checkRequest();