
const callapi = (method, url) => {

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json'

        xhr.onload = function () {

            if (xhr.status !== 200) {

                reject(xhr);
            }
            else {

                resolve(xhr);
            }
        };

        xhr.open(method, url, true);
        xhr.send();
    });
};

const chuckNorris = callapi('GET', 'https://api.chucknorris.io/jokes/random');

chuckNorris.then(data => {
    console.log('data', data)
});

chuckNorris.catch(err => {
    console.error(err)
});

chuckNorris.finally(() =>
    console.log(`I love Chuck Norris!`)
)
