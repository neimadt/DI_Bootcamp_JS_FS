const a = [ // 0x00
    { value: 1 }, // 0x01
    { value: 2 }, // 0x02
    { value: 3 }  // 0x03
];

const b = a.map(item => {

    return { ...item };
}); // 0x04
const c = [...b];

const d = JSON.parse(
    JSON.stringify(a)
);

// for (const item of a) {
//     b.push(item)
// }
// b.push(10)

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(a === b);
console.log(b === c);
console.log(a === c);
console.log(a === d);
console.log(a[0] === b[0]);
console.log(a[0] === c[0]);
console.log(b[0] === c[0]);

console.log(a[0] === d[0]);
console.log(a[1] === d[1]);
console.log(a[2] === d[2]);