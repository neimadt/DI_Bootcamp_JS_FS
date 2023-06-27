import React from 'react';


const Car = (props) => {

    const carName = "Lightning McQueen"

    console.log(props)

    return (
        <div>
            <h1>{props.sayHello()}</h1>
            <h1>In the Car.js</h1>
            <h1>My name is {carName}</h1>
            <h1>My color is <i>{props.color}</i></h1>
            <h1>And my brand is <i>{props.brand}</i></h1>

            {props.list.map(car => (
                <ul key={car.id}>
                    <li>{car.name}</li>
                    <li>{car.year}</li>
                    <li>{car.origin}</li>
                </ul>
            ))}
        </div>
    );
};

export default Car;