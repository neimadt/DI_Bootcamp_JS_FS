let arr = [
    [1, 2],
    [3, 4],
    [5, 6],
];

for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr[i].length; j++) {

        console.log(arr[i][j]);
    }
}

for (const innerArr of arr) {

    for (const value of innerArr) {

        console.log(value)
    }
}