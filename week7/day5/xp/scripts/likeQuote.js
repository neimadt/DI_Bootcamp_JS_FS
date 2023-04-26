import database from './database.js';
import getDisplayedQuote from './getDisplayedQuote.js';
import setLikeCount from './setLikeCount.js';


const likeQuote = () => {

    const quotes = database.getQuotes();

    const quote = getDisplayedQuote(quotes);

    if (!quote) return;


    const prevLikes = quote.likes ?? 0;

    quote.likes = prevLikes + 1;
    setLikeCount(quote.likes, prevLikes > 0);

    database.saveQuotes(quotes);
};

export default likeQuote;