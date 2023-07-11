import React from "react";
import store from '../redux/store';


const Day = () => {

    const { weekday } = store.getState();

    return (
        <>
            <h1 data-day={weekday}>Today is <span>{weekday}</span></h1>
        </>
    );
};

export default Day;