const fetchSunRise = async (lat, lng) => {

    try {

        const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`;

        const response = await fetch(url);
        console.log("response", response);

        if (!response.ok) throw new Error("Something went wrong");


        let data = await response.json();
        console.log("data", data);
        // let sunrise = data.results.sunrise;
        const { status, results: { sunrise } } = data;

        if (status === 'OK') {

            return sunrise;
        }
        else {

            throw new Error("Invalid data from API");
        }
    }
    catch (err) {

        console.log(err);
    }
};

(async () => {

    const start = Date.now();

    // const city1 = await fetchSunRise(48.864716, 2.349014);
    // const city2 = await fetchSunRise(40.730610, -73.935242);


    const [city1, city2] = await Promise.all([
        fetchSunRise(48.864716, 2.349014),
        fetchSunRise(40.730610, -73.935242)
    ]);

    const end = Date.now();

    alert(`${city1} & ${city2} Duration: ${end - start}`);
})()