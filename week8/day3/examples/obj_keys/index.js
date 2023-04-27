const person = {
    fname: 'Bob',
    lname: 'Sponge',
    age: 45,
    height: 45,
    age: 12,
    eat: () => {
        console.log('eating...')
    },
    head: {
        eyes: 'Yellow',
        mouth: 'Wide'
    },
    hair: undefined
};

const k = Object.keys(person);

console.log(k);

const v = Object.values(person);

console.log(v);

const kvps = Object.entries(person);

console.log(kvps);

const personClone = Object.fromEntries(
    Object.entries(person)
);

console.log(personClone === person);
console.log(personClone);






const shoppingTicket = [
    ["apple", "$2"],
    ["pear", "$1"],
    ["banana", "$0.77"],
];

const ticket = Object.fromEntries(shoppingTicket);

console.log(ticket);

