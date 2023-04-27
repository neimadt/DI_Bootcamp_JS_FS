const address = {
    street: 'Evergreen Terrace',
    number: '742',
    city: 'Springfield',
    state: 'NT',
    zip: '49007',
};

const { street: s, city: c, state } = address;
console.log(s)
console.log(c)
console.log(state)



const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63,
    }
};

const { name, scores: { maths, science = 50 } } = student;

console.log(`${name} scored ${maths} in Maths and ${science} in Elementary Science.`);