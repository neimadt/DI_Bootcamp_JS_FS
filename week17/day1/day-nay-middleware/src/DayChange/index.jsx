import React from "react";
import store, { dayBackward, dayForward, moveDayWithJokeThunk } from '../redux/store';
import { connect } from 'react-redux';


let renderCount = 0;

const DayChange = ({ back, next, nextWithJoke, backWithJoke, first, last }) => {

    renderCount += 1;
    console.log('DayChange render count = ', renderCount);

    return (
        <>
            <button onClick={back} data-button="back">Previous Day</button>
            <button onClick={next} data-button="next">Next Day</button>
            <br />
            <button onClick={backWithJoke} data-button="next">Previous Day & get a joke</button>
            <button onClick={nextWithJoke} data-button="next">Next Day & get a joke</button>
            <br />
            <button onClick={first} data-button="next">First day of week</button>
            <button onClick={last} data-button="next">Last day of week</button>
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
        },
        first: () => {
            dispatch(moveDayWithJokeThunk({ currentDay: 'Monday', direction: 'jumpto' }));
        },
        last: () => {
            dispatch(moveDayWithJokeThunk({ currentDay: 'Sunday', direction: 'jumpto' }));
        },
        nextWithJoke: () => {
            const { weekday } = store.getState();
            dispatch(moveDayWithJokeThunk({ currentDay: weekday, direction: 'forward' }));
        },
        backWithJoke: () => {
            const { weekday } = store.getState();
            dispatch(moveDayWithJokeThunk({ currentDay: weekday, direction: 'backward' }));
        }
    };
};

export default connect(null, mapDispatchToProps)(DayChange);