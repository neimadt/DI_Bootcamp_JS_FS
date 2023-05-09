
let jokeCategories;

const getRandomInteger = (minInclusiveValue, maxInclusiveValue) => {

    const randomNumber = Math.random();

    let value = (randomNumber * (maxInclusiveValue - minInclusiveValue + 1)) + minInclusiveValue;
    value = Math.floor(value);

    return value;
};

const getJoke = () => {

    if (jokeCategories && jokeCategories.length > 0) {

        const randomCatg = jokeCategories[getRandomInteger(0, (jokeCategories.length - 1))];

        let xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.chucknorris.io/jokes/random?category=${randomCatg}`);
        xhr.responseType = 'json';

        xhr.send();

        xhr.onload = function () {

            if (xhr.status !== 200) {

                alert(`Error ${xhr.status}: ${xhr.statusText || '<nothingness>'}`); // e.g. 404: Not Found
            }
            else { // show the result

                alert(`${randomCatg.toUpperCase()}\n\n${xhr.response.value}`);
            }
        };


        xhr.onerror = function () {
            alert("Request failed");
        };
    }
};

const getCategories = () => {

    if (jokeCategories && jokeCategories.length > 0) {

        getJoke();
        return;
    }

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/categories');
    xhr.responseType = 'json';

    xhr.send();

    xhr.onload = () => {

        if (xhr.status !== 200) { // analyze HTTP status of the response

            alert(`Error ${xhr.status}: ${xhr.statusText || '<nothingness>'}`); // e.g. 404: Not Found
        }
        else {

            const { response: categories } = xhr;

            jokeCategories = categories;
            getJoke();
        }
    };


    xhr.onerror = function () {
        alert("Request failed");
    };
};


document.querySelector('.btn-next-joke').addEventListener('click', () => {
    getCategories();
});

getCategories();
