import database from './database.js';
import setLikeCount from './setLikeCount.js';
import getRandomInteger from './getRandomInteger.js';


const viewRandomQuote = () => {

    setLikeCount(null);

    const quotes = database.getQuotes();

    database.randQuotes = database.randQuotes || quotes;

    const viewer = document.querySelector('.quote-viewer');

    const randomIndex = getRandomInteger(0, database.randQuotes.length - 1);
    const quote = database.randQuotes[randomIndex];

    viewer.setAttribute('data-quote-id', quote.id);

    viewer.innerHTML = `<span class="big-quote">"</span>${quote.quote}<span class="big-quote">"</span><br/><span class="author">${quote.author}</span>`;
    viewer.classList.add('displaying');
    document.querySelector('.btn-like').classList.remove('hide');

    setLikeCount(quote.likes);

    database.randQuotes = quotes.filter(q => q.id !== quote.id);
};

export default viewRandomQuote;
