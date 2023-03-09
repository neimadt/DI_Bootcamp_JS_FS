
const maxLoopCount = 10;

for (let i = 0; i < maxLoopCount; i++) {

    console.log(`Loop #${i}`);
}

const person = {
    fname: 'Bob',
    lname: 'Bobson',
    age: 45
};

const agePropertyName = 'age';

console.log(person[agePropertyName])

for (const propertyName in person) {

    console.log(`Key [${propertyName}] = ${person[propertyName]}`);
}

const arr = ['111', '222', '333'];

for (const arrValue of arr) {
    console.log(arrValue)
}


let n = 0;

while (n < 3) {

    n++;
    console.log(n)
}

let j = 9;

do {
    console.log(j)
    j++;
} while (j < 3);