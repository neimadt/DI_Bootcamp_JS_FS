import robots from './robots.js';
import robotCardHtml from './robot-card-html.js';


const cardsElement = document.querySelector('.cards');
const searchElement = document.querySelector('nav input');

const filterList = collection => {

    const cardsInnerHTML = collection && collection.length > 0
        ? collection.reduce((acc, { id, name, username, email, image }) => {

            const cardHtml = robotCardHtml
                .replace(/{{id}}/g, id)
                .replace(/{{username}}/g, username)
                .replace(/{{src}}/g, image)
                .replace(/{{alt}}/g, name)
                .replace(/{{name}}/g, name)
                .replace(/{{email}}/g, email);

            acc += cardHtml;

            return acc;
        }, '')
        : null;

    cardsElement.innerHTML = cardsInnerHTML;
};


filterList(robots);

// searchElement.addEventListener('input', ({ target: { value } }) => {

//     const filter = value.trim().toLowerCase();

//     filterList(robots.filter(r => r.name.toLowerCase().indexOf(filter) >= 0));
// });

let searchDebounceId;
searchElement.addEventListener('input', ({ target: { value } }) => {

    clearTimeout(searchDebounceId);

    const searchValue = value.trim().toLowerCase();

    searchDebounceId = setTimeout(() => {

        filterList(
            robots.filter(r => r.name.toLowerCase().indexOf(searchValue) >= 0)
        );
    }, 750);
});