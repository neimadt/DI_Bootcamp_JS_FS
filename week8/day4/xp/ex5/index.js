function displayStudentInfo({ first, last }) {

    console.log(first, last)
}

displayStudentInfo({ first: 'Elie', last: 'Schoppik' });

const o1 = {};
const o2 = {};

const o3 = o1

console.log(
    o2 === o3
)
