let arr = [10, 20, 30];

arr.splice(0, 0, '789');
console.log(arr);
console.log(arr.length);

arr.splice(arr.length, 0, '111');
// arr.push('222');
console.log(arr);

arr.splice(2, 0, 'Damien', 'Toulet', 'DDDD');
console.log(arr);

arr.splice(0, 1);
console.log(arr);

arr.splice(1, 3);
console.log(arr);

arr.splice((arr.length - 1), 1);
console.log(arr);

arr.splice((arr.length - 1), 1);
console.log(arr);
