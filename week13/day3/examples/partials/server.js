const express = require('express');


const app = express();

const PORT = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

const menu = [
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

app.get('/', (req, res) => {

    res.render('index', { nameRestaurant: 'Papa Pizza', pizzaMenu: menu });
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.listen(PORT, () => {

    console.log(`Running on http://localhost:${PORT}`);
});
