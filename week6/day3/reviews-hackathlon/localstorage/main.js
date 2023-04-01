const defaultDatabase = {
    bakeries: [
        { name: 'Cake', price: 100.50 },
        { name: 'Feuilletée', price: 75 }
    ],
    quotes: []
};

let database = localStorage.getItem('__database');
database = database ? JSON.parse(database) : defaultDatabase;

document.querySelector('#btnCreateQuote').addEventListener('click', () => {

    const quoteNumber = `Q#${Date.now()}`;

    database.quotes.push({
        number: quoteNumber
    });

    localStorage.setItem('__database', JSON.stringify(database));
});

const bakeries = document.querySelector('.bakeries');

setTimeout(() => {

    const tbody = bakeries.children[0];

    tbody.innerHTML = null;

    for (const bakerie of database.bakeries) {

        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        const tdPrice = document.createElement('td');

        tdName.textContent = bakerie.name;
        tdPrice.textContent = bakerie.price;

        tr.appendChild(tdName);
        tr.appendChild(tdPrice);

        tbody.appendChild(tr);
    }

    document.querySelector('#btnCreateQuote').removeAttribute('disabled');
}, 1000);