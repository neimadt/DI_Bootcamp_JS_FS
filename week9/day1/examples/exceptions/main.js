
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

const refresh = () => {

    document.querySelector('main').innerHTML = '<b>getting data...</b>';

    getPokemonData();
};

document.querySelector('#btn-refresh').addEventListener('click', refresh);

refresh();

