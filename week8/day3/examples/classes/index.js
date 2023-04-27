class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

const createRectangle = (height, width) => {

    return {
        height,
        width
    };
};

console.log(Rectangle)
console.log(createRectangle)

const square = new Rectangle(4, 4);
console.log(square)

const rectangle = new Rectangle(34, 4);
console.log(rectangle)

console.log(square === rectangle)

const square2 = createRectangle(4, 4);
console.log(square2)


class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        return `The ${this.type} rabbit says '${line}'`;
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");


console.log(
    killerRabbit.speak('Hey!')
);

console.log(
    blackRabbit.speak('Hello!')
);
