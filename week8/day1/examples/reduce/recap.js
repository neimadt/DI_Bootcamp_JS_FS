const arr = [
    { value: 5 },
    { value: 4 },
    { value: 55 },
    { value: 66 },
    { value: 77 },
    { value: 88 },
    { value: 996 },
];

const filteredArr = arr.filter(obj => obj.value % 2 === 0);
const mappedFilteredArr = filteredArr.map(obj => obj.value);

const biggest = Math.max(...arr.map(obj => obj.value));
const smallest = Math.min(...arr.map(obj => obj.value));

console.log(filteredArr);
console.log(mappedFilteredArr);
console.log(biggest);
console.log(smallest);


const { evens, maxValue, minValue } = arr.reduce((acc, obj) => {

    if (obj.value % 2 === 0) {

        acc.evens.push(obj.value);
    }

    if (obj.value > acc.maxValue) {

        acc.maxValue = obj.value;
    }

    acc.minValue = obj.value < acc.minValue ? obj.value : acc.minValue;

    return acc;
}, { evens: [], maxValue: 0, minValue: 99999999 });

console.log(evens);
console.log(maxValue);
console.log(minValue);
