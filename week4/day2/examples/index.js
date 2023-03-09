const original = ['111', '222', '333'];

const arr1 = [1, 2, 3];
arr1.push(original[0])
arr1.push(original[1])
arr1.push(original[2])

console.log(arr1);

const arr2 = [1, 2, 3];
arr2.push(...original);
console.log(arr2);

const arr3 = [1, 2, 3, ...original];
console.log(arr3);

const copy = [...original];
console.log(copy);


const person = {
    fname: 'Bob',
    lname: 'Bobson',
}

const clone = {
    ...person
}
console.log(clone);

const imperfectClone = {
    lname: 'Toulet',
    ...person,
    fname: 'Damien',
}
console.log(imperfectClone);
