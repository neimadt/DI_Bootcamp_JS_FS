const outside = (x) => {

    const inside = (y) => {

        return x + y;
    }

    return inside;
}

let fnInside1 = outside(3);
console.log(fnInside1 === fnInside1)

console.log(fnInside1(5))
console.log(fnInside1(7))
console.log(fnInside1(70))



let fnInside2 = outside(30);
console.log(fnInside1 === fnInside2)

console.log(fnInside2)

console.log(fnInside2(5))
console.log(fnInside2(7))
console.log(fnInside2(70))

console.log(outside(20)(1))


const add = a => b => c => d => (a + b + c) * d;

const addingSomethingtoTen = add(10);
console.log(addingSomethingtoTen(1))
console.log(addingSomethingtoTen(12))

const result = add(2)(3)(8)(10)
console.log(result)


const methods = (function () {
    let counter = 0;

    function getCounter() {
        return counter;
    }

    function calculus() {
        counter += 1;
        return counter
    }

    return {
        calculus,
        getCounter
    };
})();

const addValues = methods.calculus;

const arr = [
    addValues(),
    addValues(),
    addValues(),
    addValues(),
    addValues(),
    addValues(),
    addValues(),
    addValues(),
    addValues(),
    addValues(),
    addValues(),
    addValues(),
];

console.log(arr);
console.log(methods.getCounter());
console.log(methods.getCounter());
console.log(methods.getCounter());
console.log(methods.getCounter());
console.log(methods.getCounter());
console.log(methods.getCounter());

const Human = (name, age, gender) => {

    return {
        getName: () => name,
        getAge: () => age,
        getGender: () => gender,
        oneYearPassed: () => {
            age += 1;
        }
    };
};

const me = Human('Damien', 42, 'male');

console.log(me.getName())
console.log(me.getAge())
console.log(me.getGender())
me.oneYearPassed();
console.log(me.getAge())
me.oneYearPassed();
console.log(me.getAge())


const jl = Human('Jean-Luc', 36, 'male');

console.log(jl.getName())
console.log(jl.getAge())
console.log(jl.getGender())
jl.oneYearPassed();
console.log(jl.getAge())
jl.oneYearPassed();
console.log(jl.getAge())



const incrementBy1 = n => n + 1;
const multBy2 = n => n * 2;

const h = x =>
    multBy2(
        incrementBy1(x)
    );

console.log(
    h(20)
);

const emptyObj = { age: undefined };
console.log(emptyObj)
console.log(emptyObj.length)

const keysCount = Object.keys(emptyObj)
console.log(keysCount.length)

delete emptyObj.age
console.log('age' in emptyObj)


let user = new Object();
console.log(user)

const detachedAge = 42;

const person = {
    age: detachedAge
}


const myCar = new Object();
console.log(myCar)
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
console.log(myCar)
myCar.year = 1970;
console.log(myCar)
console.log(myCar.color)

console.log(
    myCar.make
)

console.log(
    myCar['make']
)

myCar['123'] = 'secret_engine';


console.log(
    myCar['123']
)


let myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type = 'Dot syntax';
myObj['date created'] = 'String with space';
myObj[str] = 'String value';
myObj[rand] = 'Random Number';
myObj[obj] = 'Object';
myObj[''] = 'Even an empty string';

console.log(myObj)



function makeUser(name, age) {
    return {
        name: name,
        age: age,
    };
}

let newUser1 = makeUser("John", 30);
console.log(newUser1.name);

// The same as
function makeUserAgain(name, age) {
    return {
        name,
        age
    };
}

let newUser2 = makeUserAgain("Bob", 23);
console.log(newUser2);


function showProps(obj, objName) {

    let result = '';

    for (let key in obj) {

        if (obj.hasOwnProperty(key)) {

            result += `${objName}.${key} = ${obj[key]}\n`;
        }
    }

    return result;
}

console.log(
    showProps(myCar, "myCar")
)
