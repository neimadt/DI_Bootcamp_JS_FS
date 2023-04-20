const arr = [1, 4, 9, 16];


const result = [];

const reducer = (passedValue, n, i) => {

    if (n % 2 === 0) {

        passedValue.push(n);
    }

    return passedValue;
};

const evens = arr.reduce(reducer, result);

console.log(evens)
console.log(result)
console.log(result === evens);

let sum = 0;

for (const n of arr) {
    sum += n;
}

console.log(sum)


const total = arr.reduce((t, n) => {

    const newT = t + n;

    return newT;
}, 0);

let count = arr.reduce((acc, val) => {

    console.log(`acc: ${acc}`)
    console.log(`val: ${val}`)
    console.log(`acc + val: ${acc + val}`);

    return acc + val;
});


console.log(total)
console.log(count)

const totalOfEvens = arr.reduce((t, n) => {

    if (n % 2 !== 0) return t;

    const newT = t + n;

    return newT;
}, 0);
console.log(totalOfEvens)


const person = {
    fname: 'Bob',
    lname: 'Sponge',
    age: 45,
    gender: 'Unknown'
};



const keys = Object.keys(person);
console.log(keys)

const filteredKeys = keys.filter(key => typeof person[key] === 'string');
console.log(filteredKeys)

const kvps = filteredKeys.map((key) => {

    return {
        key,
        value: person[key]
    };
});
console.log(kvps)


const kvps2 = Object.keys(person).reduce((reduced, key) => {

    const value = person[key];

    if (typeof value === 'string') {

        reduced.push({
            key,
            value
        });
    }

    return reduced;
}, []);

console.log(kvps2)


// const arr = [1, 4, 9, 16];

const newObj = arr.reduce((reduced, n, i) => {

    if (n % 2 === 0) {

        reduced[`index_${i}`] = n;
    }



    return reduced;
}, {});
console.log(newObj)


let party = [
    {
        desert: 'Chocolate Mousse',
        calories: 30,
    },
    {
        desert: 'Apple Pie',
        calories: 15,
    },
    {
        desert: 'Croissant',
        calories: 50,
    },
    {
        desert: 'Strawberry Icecream',
        calories: 5,
    },
]

let totalCalories = party.reduce((acc, curr) => {

    if (curr.desert !== 'Apple Pie') {

        acc.push(curr.calories)
    }

    return acc;
}, []);

console.log(totalCalories)


const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const text = epic.join(' ');

console.log(text)

const text2 = epic.reduce((acc, word, i) => {

    // if (word && acc) {

    //     acc += ' ';
    // }

    if (i == (epic.length - 1)) {

        acc += word;
        // return acc.trim();
    }
    else {

        acc += word + ' ';
    }

    return acc;
}, '');

console.log('!' + text2 + '!')



const numbers = [1, 2, 3, 4, 5];

const average = numbers.reduce((total, current, index, array) => {

    total += current;

    if (index === (array.length - 1)) {

        return total / array.length;
    }
    else {

        return total;
    }
}, 0);

console.log(average);


const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flattenedArray = nestedArray.reduce((acc, current) => [...acc, ...current], []);

console.log(flattenedArray);


const items = ['apple', 'banana', 'orange', 'apple', 'orange', 'grape'];

const frequency = items.reduce((acc, current) => {

    acc[current] = (acc[current] || 0) + 1;

    return acc;
}, {});

console.log(frequency);



const nums = [1, 2, 3, 4, 5, 6];

const { even, odd } = nums.reduce((acc, current) => {

    if (current % 2 === 0) {

        acc.even.push(current);
    }
    else {

        acc.odd.push(current);
    }

    return acc;
}, { even: [], odd: [] });

console.log(even, odd);


const fruits = [
    { name: 'apple', value: 10 },
    { name: 'banana', value: 20 },
    { name: 'orange', value: 15 }
];

const maxItem = fruits.reduce((acc, current) => {

    if (current.value > acc.value) {

        return current;
    }
    else {

        return acc;
    }
});
console.log(maxItem); 
