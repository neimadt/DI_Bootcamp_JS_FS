import React from "react";
import store, { dayBackward, dayForward } from '../redux/store';
import { connect } from 'react-redux';


let renderCount = 0;

const DayChange = ({ back, next }) => {

    renderCount += 1;
    console.log('DayChange render count = ', renderCount);

    return (
        <>
            <button onClick={back} data-button="back">Previous Day</button>
            <button onClick={next} data-button="next">Next Day</button>
        </>
    );
};


const mapDispatchToProps = (dispatch) => {

    return {
        next: () => {
            const { weekday } = store.getState();
            dispatch(dayForward(weekday))
        },
        back: () => {
            const { weekday } = store.getState();
            dispatch(dayBackward(weekday))
        }
    };
};

export default connect(null, mapDispatchToProps)(DayChange);