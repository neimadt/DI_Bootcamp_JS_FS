import React from 'react';
import { connect } from 'react-redux';
import Day from '../Day';
import DayChange from '../DayChange';


let renderCount = 0;

const App = () => {

    renderCount += 1;
    console.log('App render count = ', renderCount);

    return (
        <>
            <Day />
            <DayChange />
        </>
    );
};

export default connect()(App);
// export default App;