const arr = [1, 4, 9, 16];
console.log(arr);

const evenArr = arr.filter((n, i) => {

    console.log(n, i)

    if (n % 2 === 0) {

        return true;
    }

    return false;
});

console.log(evenArr);

const mapArr = arr.map((n) => `This is a number ${n}`);

console.log(mapArr);


const map = (passedArray, transformFunc) => {

    const mapped = [];

    for (let i = 0; i < passedArray.length; i++) {

        const item = passedArray[i];

        const transformedValue = transformFunc(item, i, passedArray);

        mapped.push(transformedValue);

    }

    // for (const item of passedArray) {

    //     const transformedValue = transformFunc(item);

    //     mapped.push(transformedValue);
    // }

    return mapped;
};


const mapArr2 = map(arr, (n, i, a) => `This is #${n} index:${i} arr[${a}]`)

console.log(mapArr2);


const mapEventNums = arr.map(n => {

    if (n % 2 === 0) {
        return true;
    }
})

console.log(mapEventNums);
