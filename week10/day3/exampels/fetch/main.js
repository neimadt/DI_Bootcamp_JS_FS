const fetchSunRise = async (endpoint) => {

    try {

        const response = await fetch(endpoint);
        console.log("response", response);

        if (!response.ok) throw new Error("Something went wrong");


        let data = await response.json();
        console.log("data", data);
        // let sunrise = data.results.sunrise;
        const { results: { sunrise } } = data;

        const p = document.createElement('p');
        p.innerHTML = `<b>The hour of the sunrise in Tel Aviv is: ${sunrise}</b>`;

        document.body.appendChild(p);
    }
    catch (err) {

        console.log(err);
    }
}

fetchSunRise("https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818");