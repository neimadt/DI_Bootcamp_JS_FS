const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.splice(0, 1);
console.log(fruits);

fruits.push('Kiwi');
console.log(fruits);
fruits.shift();
console.log(fruits);

fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);

const subarray2 = ["Oranges"];
const subarray1 = ["Apples", subarray2, "Blueberries"];
const moreFruits = ["Banana", subarray1];


console.log(moreFruits);

let sa1 = moreFruits[1];
console.log(sa1);
let sa2 = sa1[1];
console.log(sa2);
let result = sa2[0];
console.log(result);

console.log(moreFruits[1][1].toString());
console.log(moreFruits[1][1][0]);


