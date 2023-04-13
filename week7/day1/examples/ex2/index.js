const numbers = [10, 11, 12, 15, 20];

numbers.forEach(num => num % 2 === 0 ? console.log(num) : undefined);

numbers.forEach(num => {

    if (num % 2 === 0) {
        console.log(num);
    }
});

numbers.forEach(num => {

    if (num % 2 !== 0) return;

    console.log(num);
});


const myArr = [1, 2, 3, 4, 5, 6, 7, 8];

const isThereAnEvenNumber = myArr.some((value) => {
    console.log(value);
    return (value % 2 === 0);
});

console.log(isThereAnEvenNumber)

const anEvenNumber = myArr.find((value) => {
    console.log(value);
    return value > 10;
    // return (value % 2 === 0);
});


console.log(('hey').indexOf('h') === 0)


const words = ["wow", "hey", "bye"];

String.prototype.premier = function (str) {
    return this.indexOf(str) === 0;
}

const found = words.find(word => word.premier('h'));
const has = words.some(word => word.premier('h'));

console.log(found)
console.log(has)


const myArr2 = [1, 2, 3, 4, 5, 6, 7, 8];
const has2 = myArr2.every((value) => {
    console.log(value)
    return (value % 2 !== 0);
});
console.log(has2)
