import React from 'react';


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = { foreColor: 'white', bgColor: 'red' };
    }

    sayHi() {
        alert(`${this.props.label} ${this.props.message}`);
    }

    flipColor() {

    }

    render() {

        console.log(this)

        return (
            <div style={{ color: this.state.foreColor, backgroundColor: this.state.bgColor }}>
                <h2>Hello from Class {this.props.label} {this.props.message}</h2>
                <button onClick={this.sayHi.bind(this)}>Say Hi</button>
            </div>
        );
    }
}

export default App;
