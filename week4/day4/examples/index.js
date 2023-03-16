const r1 = 3 || 'Orange';
console.log(r1)

const r2 = 'Orange' || 3;
console.log(r2)

const r3 = '' || 0 || 'finally' || false || null || undefined;
console.log(r3)

// Everything falsy: false, 0, '', null, undefined

console.log(3 || 'Orange');
console.log('' || 'Orange');
console.log(true || 0);
console.log(undefined || null);


const person = {
    name: 'Jack',
    age: 34
}
console.log(person.job || 'unemployed');


console.log(0 && 'Orange');
console.log('' && 'Orange');
console.log(true && null);
console.log('Apple' && 'Orange');



const person2 = {
    name: 'Jack',
    age: 4
}

console.log((person2.age > 18) && 'Driving allowed');

if (person2.age > 18) {
    console.log('Driving allowed');
}
else {
    console.log(false);
}

console.log(person2.age > 18 ? 'Driving Allowed' : false)

console.log(person2.age > 18
    ? 'Driving Allowed'
    : (person2.age === 18 ? 'Nearly there' : false))

console.log(
    (person2.age > 18 && 'Driving allowed') || (person2.age === 18 && 'Nearly there') || false
)

console.log(typeof 100)
console.log(typeof 'Bob')
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof Symbol(9))
console.log(typeof { age: 25 })
console.log(typeof (() => { }))
console.log(typeof [])