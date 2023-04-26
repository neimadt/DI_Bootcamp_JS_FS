import database from './database.js';


const getDisplayedQuote = (quotes) => {

    const viewer = document.querySelector('.quote-viewer');

    const quoteIndex = parseInt(viewer.getAttribute('data-quote-id'));

    quotes = quotes || database.getQuotes();

    const quote = quotes.find(q => q.id === quoteIndex);

    return quote;
};

export default getDisplayedQuote;
