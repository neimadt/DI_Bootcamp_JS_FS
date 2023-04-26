import viewRandomQuote from './viewRandomQuote.js';
import likeQuote from './likeQuote.js';


const btnGen = document.querySelector('.btn-gen');
btnGen.addEventListener('click', viewRandomQuote);

const btnLike = document.querySelector('.btn-like');
btnLike.addEventListener('click', likeQuote);

viewRandomQuote();
