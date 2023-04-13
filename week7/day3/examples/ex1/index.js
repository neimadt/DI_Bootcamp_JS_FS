((name) => {
    console.log("Hello " + name);
})('Bob')


function verify(name) {

    function isJohn() {

        return name === "John";
    }

    if (isJohn()) {

        console.log("Yep, this is John");
    }
}

verify("John");



const hummus = function (factor) {

    const ingredient = function (amount, unit, name) {

        let ingredientAmount = amount * factor;

        if (ingredientAmount > 1) {

            unit += "s";
        }

        console.log(`${ingredientAmount} ${unit} ${name}`);
    };

    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

hummus(20)


function add() {
    let counter = 0;
    function plus() {
        counter += 1;
        console.log(counter);
    }
    plus();
}

add()
add()
add()
add()