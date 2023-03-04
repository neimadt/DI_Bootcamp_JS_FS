const newDog = 'aaa bbb ccc ddd';

const capitaliseWord = (value) => {

    const fl = value.substring(0, 1);
    const rest = value.substring(1);

    return `${fl.toUpperCase()}${rest.toLowerCase()}`;
}


const capitalise = (value) => {

    const splits = value.split(' ');
    console.log(splits)

    return splits.map(word => capitaliseWord(word)).join(' ');
}

console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())
console.log(capitaliseWord(newDog))
console.log(capitalise(newDog))


// program to check if the number is even or odd
// take input from the user
const number = 7; //prompt("Enter a number: ");

const result = number / 2;
console.log(result);
console.log(parseInt(result));

if (result === parseInt(result)) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}

//check if the number is even
if (number % 2 === 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}