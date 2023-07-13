import React from "react";
import { connect } from 'react-redux';


let renderCount = 0;

const Day = props => {

    renderCount += 1;
    console.log('Day render count = ', renderCount);
    const { weekday } = props;

    return (
        <>
            <h1 data-day={weekday}>Today is <span>{weekday}</span></h1>
        </>
    );
};

const mapStateToProps = (state) => {
    return { weekday: state.weekday };
};

export default connect(mapStateToProps)(Day);