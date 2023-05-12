const closeSvg = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
`;

let idCounter = 0;

const onDeleteRow = ({ currentTarget }) => {

    const rowId = currentTarget.getAttribute('data-row');

    const row = document.querySelector(`#${rowId}.row`);

    if (row) {

        row.remove();
    }
};

const getGif = tag => {

    if (!tag || typeof tag !== 'string') return;


    const baseUrl = 'https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

    const xhr = new XMLHttpRequest();

    tag = tag ? encodeURIComponent(tag) : '';

    const url = baseUrl + (tag ? `&tag=${tag}` : '');

    xhr.open('GET', url);
    xhr.responseType = 'json';

    xhr.onload = () => {

        const { status, statusText } = xhr;

        if (status !== 200) {

            alert(`Error!\n${status}\n${statusText || ''}`);
            return;
        }

        const { response: { data: { images: { original } } } } = xhr;
        const row = document.createElement('div');

        const rowId = `${Date.now()}${--idCounter}`;

        row.setAttribute('id', `row-${rowId}`);
        row.classList.add('row');
        row.innerHTML = `<div class="img-container"><img src=${original.url}/></div>`;
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('data-row', `row-${rowId}`);
        deleteButton.innerHTML = closeSvg;
        deleteButton.addEventListener('click', onDeleteRow);

        row.appendChild(deleteButton);

        const firstRow = document.querySelector('.row');

        if (firstRow) {

            document.body.insertBefore(row, firstRow);
        }
        else {

            document.body.appendChild(row);
        }
    };

    xhr.send();
};

document.querySelector('form').addEventListener('submit', e => {

    e.preventDefault();

    // const searchValue = document.forms[0].search.value;

    const { forms: [{ search: { value: searchValue } }] } = document;

    getGif(searchValue);
});

// getGif('sun');
