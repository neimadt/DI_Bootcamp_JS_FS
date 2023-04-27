class Animal {
    constructor(hotBlooded) {
        this.hotBlooded = hotBlooded;
    }
}

class Mamal extends Animal {
    constructor() {
        super(true);
    }
}

class Reptile extends Animal {
    constructor(isAmphibian) {
        super(false);

        this.isAmphibian = isAmphibian;
    }
}

const lizard = new Reptile(false);
const croco = new Reptile(true);
const dog = new Mamal();

console.log(lizard);
console.log(croco);
console.log(dog);
