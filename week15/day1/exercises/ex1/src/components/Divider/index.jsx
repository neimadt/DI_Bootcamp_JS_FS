import { Component } from 'react';

class Divider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number1: 1,
            number2: 1,
            divisionResult: 1
        };

        this.calculate = this.calculate.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    calculate(e) {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        const number1 = parseFloat(data.number1) || 0;
        const number2 = parseFloat(data.number2) || 0;


        const divisionResult = number1 / number2;

        this.setState({
            number1,
            number2,
            divisionResult
        });
    }

    handleInputChange({ target: { value, name } }) {

        this.setState({
            [name]: value
        });
    }

    render() {

        if (this.state.number2 === 0) throw new Error('Cannot divide by Zero');


        return (
            <>
                <form onSubmit={this.calculate}>
                    <input type="number" name="number1" value={this.state.number1} onChange={this.handleInputChange} />
                    &nbsp;
                    <b>/</b>
                    &nbsp;
                    <input type="number" name="number2" value={this.state.number2} onChange={this.handleInputChange} />
                    &nbsp;
                    <button type="submit">=</button>
                    &nbsp;
                    <span>{this.state.divisionResult}</span>
                </form>
            </>
        );
    }
}

export default Divider;