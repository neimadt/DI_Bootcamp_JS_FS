import './style.css';
import { Component } from 'react';


const TYPE_OF_OPERATIONS = {
    Add: 'add',
    Substract: 'substrack',
    Multiply: 'multiply',
    Divide: 'divide'
};

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: 0,
            operation: TYPE_OF_OPERATIONS.Add
        };
    }

    onSubmit(e) {
        e.preventDefault();
    }

    render() {

        return (
            <>
                <h2>Adding two numbers</h2>
                <form className="calculator-form" onSubmit={this.onSubmit}>
                    <input type="number" placeholder="#1" name="number1" />
                    <input type="number" placeholder="#2" name="number2" />
                    <button type="submit">Add Them!</button>
                    <h2>{this.state.result}</h2>
                </form>
            </>
        );
    }
}

export default Calculator;
