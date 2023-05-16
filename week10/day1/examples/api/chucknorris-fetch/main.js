


// const chuckNorris = fetch('https://api.chucknorris.io/jokes/random');

// chuckNorris
//     .then(resp => resp.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err))
//     .finally(() => console.log(`I love Chuck Norris!`))

const exec = async () => {

    try {

        const resp = await fetch('https://apiz.chucknorris.io/jokes/random');
        const data = await resp.json();

        console.log(data)
    }
    catch (err) {

        console.error(err)
    }
    finally {

        console.log(`I love Chuck Norris!`)
    }
};

exec();
