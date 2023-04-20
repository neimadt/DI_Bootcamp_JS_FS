let numbers = [0, 1, 2, 3, 10, 30, 20];

numbers.sort((a, b) => {
    console.log({ a, b })
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

console.log(numbers);


let animals = [
    'cat', 'dog', 'elephant', 'bee', 'ant', 'z', 'az', 'Az', 'aZ', 'aa'
];
animals.sort((a, b) => {
    console.log({ a, b })
    if (a.toLowerCase() > b.toLowerCase())
        return 1;
    if (a.toLowerCase() < b.toLowerCase())
        return -1;
    return 0;
});

console.log(animals);


let employees = [
    { name: 'John', salary: 90000, hireDate: "July 1, 2010" },
    { name: 'David', salary: 75000, hireDate: "August 15, 2009" },
    { name: 'Ana', salary: 80000, hireDate: "December 12, 2011" }
];

employees.sort(function (x, y) {
    // return x.salary - y.salary;
    return new Date(y.hireDate) - new Date(x.hireDate);

    // if (x.hireDate > y.hireDate)
    //     return 1;
    // if (x.hireDate < y.hireDate)
    //     return -1;
    // return 0;
});

console.table(employees);