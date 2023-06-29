import React from 'react';
import Starship from '../Starship';

class Sunrise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gettingShips: false,
            ships: []
        };

        this.getFleet = this.getFleet.bind(this);
    }

    async getFleet() {

        try {

            this.setState({ gettingShips: true });

            const resp = await fetch("https://swapi.dev/api/starships");

            const { count, results } = await resp.json();

            this.setState({ ships: results, gettingShips: false });
        }
        catch (err) {

            console.log(`We got the error ${error}`)
        }
    }

    componentDidMount() {

        this.getFleet();
    }

    render() {

        const { state: { gettingShips, ships } } = this;


        return (
            <>
                <button onClick={this.getFleet}>Refresh</button>
                {
                    gettingShips ?
                        <h2>Please be patient we are calling the Fleet...</h2>
                        :
                        <ul>
                            {
                                ships.map((ship) => (
                                    <Starship key={ship.name} {...ship} />
                                ))
                            }
                        </ul>
                }
            </>
        );
    }
}

export default Sunrise;