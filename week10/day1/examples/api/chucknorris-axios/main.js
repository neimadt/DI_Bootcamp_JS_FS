
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

const chuckNorris = axios.get('https://api.chucknorris.io/jokes/random');

chuckNorris
    .then(data => {
        console.log('data', data)
    })
    .catch(err => {
        console.error(err)
    })
    .finally(() =>
        console.log(`I love Chuck Norris!`)
    );
