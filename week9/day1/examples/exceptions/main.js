
const getPokemonData = async () => {

    try {

        await new Promise(resolve => setTimeout(resolve, 1500));


        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');

        const data = await resp.json();

        document.querySelector('main').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    }
    catch (err) {

        console.error('Fetch error caught:', err);

        // alert('Something went wrong. Please check your internet connection.');

        document.querySelector('main').innerHTML = `<i style="color: red;">Something went wrong. Please check your internet connection.</i>`;
    }
    finally {

        console.log('Exiting function [getPokemonData]');
    }
};



const ajaxPokemonData = () => {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto', true);

    // xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.timeout = 10000;

    console.log(xhr.timeout)

    xhr.onload = () => {
        const data = JSON.parse(xhr.response);

        document.querySelector('main').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    };

    xhr.onerror = () => {
        // only triggers if the request couldn't be made at all
        console.error(`Network Error`);
    };

    xhr.onloadend = () => {

        const contentType = xhr.getResponseHeader('Content-Type');
        const headers = xhr.getAllResponseHeaders();
        // only triggers if the request couldn't be made at all
    };

    xhr.onprogress = function (event) { // triggers periodically
        // event.loaded - how many bytes downloaded
        // event.lengthComputable = true if the server sent Content-Length header
        // event.total - total number of bytes (if lengthComputable)
        console.log(`Received ${event.loaded} of ${event.total}`);
    };

    xhr.send();
};

const refresh = () => {

    document.querySelector('main').innerHTML = '<b>getting data...</b>';

    // getPokemonData();
    ajaxPokemonData();
};

document.querySelector('#btn-refresh').addEventListener('click', refresh);

refresh();