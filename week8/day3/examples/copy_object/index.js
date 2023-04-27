let myCar = {
    color: 'blue',
    details: { // 0x02
        plateNumber: 123,
        name: "Ford"
    }
}

// 0x01


let myNewCar = { ...myCar }
console.log("myNewCar : ", myNewCar)
// 0x03

// SHALLOW COPYING
myCar.color = "red"
console.log("myNewCar.color :", myNewCar.color)
// myNewCar.color : blue -- UNCHANGED
console.log("myCar.color :", myCar.color)
// myCar.color : red -- CHANGED

myCar.details.plateNumber = 345
console.log("myNewCar.details.plateNumber :", myNewCar.details.plateNumber)
console.log("myCar.details.plateNumber :", myCar.details.plateNumber)

console.log(myCar === myNewCar)
console.log(myCar.details === myNewCar.details)


// DEEP COPYING
const deepCopyCar = {
    ...myCar,
    details: { // 0x04
        ...myCar.details
    }
};


console.log(myCar === deepCopyCar)
console.log(myCar.details === deepCopyCar.details)
