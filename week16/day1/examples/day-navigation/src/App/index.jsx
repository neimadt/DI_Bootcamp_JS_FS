import React from 'react';
import Day from '../Day';
import DayChange from '../DayChange';


class App extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <>
                <Day />
                <DayChange />
            </>
        );
    }
}

export default App;