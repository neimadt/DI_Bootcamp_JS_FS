class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}


class Dog extends Animal {

    constructor(name, noise) {

        super(name);
        console.log(this.name)

        this.noise = noise;
    }

    speak() {
        console.log(`${this.name} barks. It says ${this.noise}`);
    }
}

let d = new Dog('Mitzie', "Wouaf");

d.speak();
