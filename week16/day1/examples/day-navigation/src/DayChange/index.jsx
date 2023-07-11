import React from "react";
import store, { dayBackward, dayForward } from '../redux/store';


const handleDayChange = event => {

    const buttonType = event.target.dataset.button;

    const { weekday } = store.getState();

    switch (buttonType) {

        case "next":
            store.dispatch(dayForward(weekday));
            break;

        case "back":
            store.dispatch(dayBackward(weekday));
            break;

        default:
            console.log("wrong button")
    }
};

const DayChange = () => {

    return (
        <>
            <button onClick={handleDayChange} data-button="back">Previous Day</button>
            <button onClick={handleDayChange} data-button="next">Next Day</button>
        </>
    );
};

export default DayChange;