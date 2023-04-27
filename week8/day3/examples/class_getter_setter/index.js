class Human {
    constructor({ fname, lname }) {
        this.accessCount = 0;
        this.fname = fname;
        this.lname = lname;

        this._fullName = `${fname} ${lname} ${this.accessCount}`;
    }
    // Getter
    get fullName() {
        this.accessCount += 1;
        return `${this.fname} ${this.lname} ${this.accessCount}`;
    }

    set fullName(value) {

        const splits = value.split(' ');

        const [fname, lname] = splits;

        this.fname = fname;
        this.lname = lname;
    }
}

const bob = new Human({ fname: 'Bob', lname: 'Sponge' });

console.log(
    bob.fullName
)

console.log(
    bob._fullName
)

bob.fullName = 'John Doe';
bob._fullName = 'John Doe';

console.log(
    bob.fullName
)

console.log(
    bob._fullName
)