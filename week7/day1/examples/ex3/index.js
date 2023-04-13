let word = 'Hello World';

console.log(
    word.includes('l')
)

const words = ["hello", "hey", "hola"];

console.log(
    words.includes('hello')
)

const newWord = word.replace('o', 'a');

console.log(newWord);

let splits = word.split('o');
console.log(splits);
splits = splits.join('a');
console.log(splits);

splits = word.split('l').join('[')
console.log(splits);

let day = '5';

day = day.padStart(2, '0');
console.log(day);

let month = '12';
month = month.padEnd(2, '0');
console.log(month);

let tobetrimed = ' hello \n\t';
tobetrimed = tobetrimed.trim()

console.log("|" + tobetrimed + "|");


let arr = ["blue", ["red", "yellow", [1, 2, 3]], "green"];

const flattened = arr.flat(9999);
console.log(arr);
console.log(flattened);
