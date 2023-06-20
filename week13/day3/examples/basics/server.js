const express = require('express');

const database = {
    'pirate-pizza': {
        title: 'Pirate Pizza Hot',
        menu: [
            {
                name: "Margarita",
                price: 10,
                ingredients: ["Tomato Sauce", "Mozzarella", "Basil"]
            },
            {
                name: "Bianca",
                price: 13,
                ingredients: ["Ricotta", "Mozzarella", "Garlic"]
            },
            {
                name: "Etna",
                price: 14,
                ingredients: ["Tomato sauce", "Mozzarella", "Anchovies", "Capers", "Olives"]
            }
        ]
    },
    'papa-pizza': {
        title: 'Papa Pizza Cold',
        menu: [
            {
                name: "Margarita",
                price: 10,
                ingredients: ["Tomato Sauce", "Mozzarella", "Basil"]
            },
            {
                name: "3 Cheese",
                price: 15,
                ingredients: ["Craft", "Mozzarella", "Parmesan"]
            }
        ]
    },
    'mama-pizza': {
        title: 'Mama Pizza',
    }
};


const app = express();

const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    res.render('index');
})

app.get('/hello', (req, res) => {

    res.render('hello');
})

app.get('/restaurant/:slug', (req, res) => {

    const { params: { slug } } = req;

    const pizzaRestaurant = database[slug];

    if (!pizzaRestaurant) {

        res.statusCode = 404;
        res.send();
        return;
    }

    res.render('restaurant', { title: pizzaRestaurant.title, menu: pizzaRestaurant.menu || [] });
})

app.listen(PORT, () => {

    console.log(`Running on http://localhost:${PORT}`);
});
