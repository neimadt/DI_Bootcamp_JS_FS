const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


const dayForward = (state, { payload: day }) => {

    console.log("IN THE REDUCER - case FORWARD_DAY");

    let chosenDay;
    const currentDayIndex = week.indexOf(day);

    if (currentDayIndex === week.length - 1) {

        chosenDay = week[0];
    }
    else {

        chosenDay = week[currentDayIndex + 1]
    }

    state.weekday = chosenDay;
    state.jokeOfTheDay = '';
};

const dayBackward = (state, { payload: day }) => {

    console.log("IN THE REDUCER - case BACKWARD_DAY");

    let chosenDay;
    const currentDayIndex = week.indexOf(day);

    if (currentDayIndex === 0) {

        chosenDay = week[week.length - 1]
    }
    else {

        chosenDay = week[currentDayIndex - 1]
    }

    state.weekday = chosenDay;
    state.jokeOfTheDay = '';
};


const getRandomInteger = (minInclusiveValue, maxInclusiveValue) => {

    const randomNumber = Math.random();

    let value = (randomNumber * (maxInclusiveValue - minInclusiveValue + 1)) + minInclusiveValue;
    value = Math.floor(value);

    return value;
};

const moveDayWithJokeAsync = async ({ currentDay, direction }) => {

    try {

        let chosenDay;
        const currentDayIndex = week.indexOf(currentDay);

        switch (direction) {

            case 'forward': {

                if (currentDayIndex === week.length - 1) {

                    chosenDay = week[0];
                }
                else {

                    chosenDay = week[currentDayIndex + 1];
                }
            } break;

            case 'backward': {

                if (currentDayIndex === 0) {

                    chosenDay = week[week.length - 1];
                }
                else {

                    chosenDay = week[currentDayIndex - 1];
                }
            } break;

            case 'jumpto': {

                chosenDay = currentDay;
            } break;
        }

        const resp = await fetch(`https://api.chucknorris.io/jokes/search?query=${chosenDay}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const { result } = await resp.json();

        const index = getRandomInteger(0, result.length - 1);

        return { chosenDay, jokeOfTheDay: result[index].value };
    }
    catch (err) {

        console.error(err);

        throw err;
    }
};

export { dayForward, dayBackward, moveDayWithJokeAsync };
