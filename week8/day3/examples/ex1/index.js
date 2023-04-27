const myObj = {
    name: "John",
    lastName: "Doe",
    age: 25,
    friends: ["Mark", "Lucie", "Ana"]
};

let length = 0;

Object.entries(myObj).forEach(kvp => {

    length += 1;

    console.log(`The ${kvp[0]} key is : ${kvp[1]}`)
});

console.log(`Length: ${length}`);

for (const key of Object.keys(myObj)) {

    console.log(`The ${key} key is : ${myObj[key]}`)
}

let fullSentence = Object.keys(myObj).map((key, i) => {

    let rank = i + 1;

    switch (rank) {

        case 1:

            rank = `${rank}st`;
            break;

        case 2:

            rank = `${rank}nd`;
            break;

        case 3:

            rank = `${rank}rd`;
            break;

        default:

            rank = `${rank}th`;
            break;
    }


    return `The ${rank} key, ${key} is : ${myObj[key]}`;
});
console.log(fullSentence)

fullSentence = fullSentence.join('; ');

console.log(fullSentence)
