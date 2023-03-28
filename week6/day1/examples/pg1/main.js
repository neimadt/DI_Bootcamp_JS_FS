function sayHi(phrase, who, v1, v2, v3) {
    console.log(phrase + ', ' + who + v1 + v2 + v3);
}

const timeoutid = setTimeout(sayHi, 3000, "Hello", "John", 78, 2, 3);

console.log(timeoutid)

clearTimeout(timeoutid)
