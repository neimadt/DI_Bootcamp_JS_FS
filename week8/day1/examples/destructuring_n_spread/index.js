let a = 10;
let b = 20
let rest = [{ a: 1, b: 2 }, 30, 40, 50]

const iterable = [a, b, ...rest]
console.log(iterable);


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const joined = arr1.concat(arr2);
console.log(joined);

const joined2 = [...arr1, ...arr2]
console.log(joined);


const obj1 = { a: 1, b: 2, c: 3 }
const obj2 = { d: 4, e: 5, f: 6 }

const merged = { ...obj1, ...obj2 }
console.log(merged);

const merged2 = Object.assign({}, obj1, obj2);
console.log(merged2);



let [c, d, ...rest2] = [10, 20, 30, 40, 50];
console.log('c: ', c);
console.log('d: ', d);
console.log('rest: ', rest2);




const rainbow = ['red', 'orange', 'yellow'];

const [...rainbowClone] = rainbow;
const rainbowClone2 = [...rainbow];

console.log(rainbow === rainbowClone);
console.log(rainbowClone);

rainbow.push("violet");
console.log(rainbow);
console.log(rainbowClone);


let alphabets = ["A", ..."BCD", "E"];
console.log(alphabets);


let nums = [1, ...'234', 5];
console.log(nums);
nums = nums.map(s => parseInt(s)).filter(n => n % 2 === 0);
console.log(nums);

