const whenAreWe = year => year < 2000 ? 'You live in the Middle Age' : 'You are in the 21st century';

console.log(whenAreWe(5000))

const calculator = (num1, num2, operator) =>
    operator === '+'
        ? num1 + num2
        : operator === '-'
            ? num1 - num2
            : operator === '*'
                ? num1 * num2
                : operator === '/'
                    ? num1 / num2
                    : NaN;

console.log(calculator(5, 2, '+'))
console.log(calculator(5, 2, '-'))
console.log(calculator(5, 2, '*'))
console.log(calculator(5, 2, '/'))

const eol = '!';


const str2 = 'Hello' + '\n\n\t' + 'world' + eol;
const str1 = `Hello\n\n\tworld${eol}`


const str = `Hello

    word${eol}`

console.log(str1)
console.log(str)
console.log(str2)


let a = 5;
let b = 10;
console.log('Fifteen is ' + (a - b) + ' and\nnot ' + (2 * a + b) + '.');

let x = 5;
let y = 10;
console.log(`Fifteen is ${x + y} and
not ${2 * x + y}.`);


function myFunc(x, y) {
    return x + y;
}

myFunc(2, 9);

const myFunc1 = (x, y) => {
    return x + y;
}

myFunc1(6, 7)

const myFunc2 = (x, y) => x + y;



const myArray = [2, 3, 4, 5, 6];

//1st example with arrow function
myArray.forEach((number, index) => {
    console.log("number: ", number)
    console.log("index: ", index)
});

//2nd example with arrow function
myArray.forEach((number, i, arr) => {
    console.log(arr)
    arr[i] = arr[i] * 2;
});

console.log(myArray)
//output : [ 4, 6, 8, 10, 12 ]

//2nd example with function expression
myArray.forEach(function (number, i, arr) {
    arr[i] = number * 2;
});

console.log(myArray)
