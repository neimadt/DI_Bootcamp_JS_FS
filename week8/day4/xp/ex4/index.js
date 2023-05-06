class Person {
    constructor(name) {
        this.name = name;
    }
}

const member = new Person('John');
console.log(typeof member);

const today = new Date();
console.log(today.toISOString());
console.log(typeof today);