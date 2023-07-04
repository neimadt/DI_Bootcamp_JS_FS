import { Component } from 'react';


class Inputs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input1Text: '#1'
        };

        this.handleInput1Change = this.handleInput1Change.bind(this)
    }

    handleInput1Change({ target: { value } }) {

        this.setState({
            input1Text: value
        });
    }

    render() {

        return (
            <>
                <input
                    value={this.state.input1Text}
                    placeholder="Enter some text"
                    onChange={this.handleInput1Change} />
                <div>= {this.state.input1Text}</div>
            </>
        )
    }
}

export default Inputs;
