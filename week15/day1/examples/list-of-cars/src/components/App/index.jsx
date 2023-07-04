import { Component } from 'react';
import SearchCar from '../SearchCars';
import Car from '../Car';


const listCars = [
    {
        id: 1,
        brand: "ford",
        name: "ford torino",
        year: "1970-01-01",
        origin: "USA"
    },
    {
        id: 2,
        brand: "ford",
        name: "ford galaxie 500",
        year: "1970-01-01",
        origin: "USA"
    },
    {
        id: 3,
        brand: "chevrolet",
        name: "chevrolet vega 2300",
        year: "1971-01-01",
        origin: "USA"
    },
    {
        id: 4,
        brand: "peugeot",
        name: "peugeot 504 (sw)",
        year: "1972-01-01",
        origin: "Europe"
    },
    {
        id: 5,
        brand: "renault",
        name: "renault 12 (sw)",
        year: "1972-01-01",
        origin: "Europe"
    },
];

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedBrand: '',
            filteredCars: []
        };

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange({ target: { value } }) {

        const lcValue = value.toLowerCase();

        const filteredCars = listCars.filter(car => car.brand.toLowerCase().includes(lcValue));

        this.setState({
            selectedBrand: value,
            filteredCars
        });
    }

    render() {

        return (
            <div className="box">
                <SearchCar
                    listCars={listCars}
                    handleChange={this.handleChange} />
                <Car
                    selectedBrand={this.state.selectedBrand}
                    filteredCars={this.state.filteredCars} />
            </div>
        );
    };
}

export default App;