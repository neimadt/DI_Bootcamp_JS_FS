const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


const dayForward = (state, { payload: day }) => {

    let chosenDay;
    const currentDayIndex = week.indexOf(day);

    if (currentDayIndex === week.length - 1) {

        chosenDay = week[0];
    }
    else {

        chosenDay = week[currentDayIndex + 1]
    }

    state.weekday = chosenDay;
};

const dayBackward = (state, { payload: day }) => {

    let chosenDay;
    const currentDayIndex = week.indexOf(day);

    if (currentDayIndex == 0) {

        chosenDay = week[week.length - 1]
    }
    else {

        chosenDay = week[currentDayIndex - 1]
    }

    state.weekday = chosenDay;
};

export { dayForward, dayBackward };
