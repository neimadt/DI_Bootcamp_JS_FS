import React from 'react';

class Sunrise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: "Israel",
            city: "Tel Aviv"
        };
    }

    async componentDidMount() {

        try {

            const resp = await fetch("https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818");

            const data = await resp.json();
            this.setState({ hourSunrise: data.results.sunrise }) //add a new attribute to the state
        }
        catch (err) {

            console.log(`We got the error ${error}`)
        }
    }

    render() {

        const { country, city, hourSunrise } = this.state;

        return (
            <div>
                <h1>In {country}</h1>
                <p>
                    The hour of the sunrise in {city} is {hourSunrise ? <b>{hourSunrise}</b> : <b><i>please wait...</i></b>}
                </p>
            </div>
        );
    }
}

export default Sunrise;