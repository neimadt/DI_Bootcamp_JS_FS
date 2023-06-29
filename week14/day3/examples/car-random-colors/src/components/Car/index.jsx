import React from 'react';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Ford',
            model: 'Mustang',
            carColor: 'red',
            year: 1964,
        };
    }

    getRandomColor() {

        const index = Math.floor(Math.random() * this.props.colors.length);

        return this.props.colors[index];
    }

    //we change the value of the attribute
    changeColor = () => {
        //get random color
        const randomColor = this.getRandomColor();
        this.setState({ carColor: randomColor });
    }

    render() {

        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p style={{ backgroundColor: this.state.carColor }}>
                    It is a {this.state.carColor} {this.state.model} from {this.state.year}.
                </p>

                {/* button calls the changeColor method */}
                <button
                    type='button'
                    onClick={this.changeColor.bind(this)}>
                    Change color
                </button>
            </div>
        );
    }
}

export default Car;