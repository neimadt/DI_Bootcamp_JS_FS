const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];

let filredUsers = users.filter(u => u.role === 'Full Stack Resident');

console.log(filredUsers.length)
console.log(filredUsers)

filredUsers = filredUsers.map(u => u.lastName);

console.log(filredUsers)

const elegantWay = users.reduce((acc, u) => {

    if (u.role === 'Full Stack Resident') {

        acc.push(u.lastName);
    }

    return acc;
}, []);

console.log(elegantWay)

