
const getRandomInteger = (minInclusiveValue, maxInclusiveValue) => {

    const randomNumber = Math.random();

    let value = (randomNumber * (maxInclusiveValue - minInclusiveValue + 1)) + minInclusiveValue;
    value = Math.floor(value);

    return value;
};


const askIfWantToPlay = (tryAgain) => {

    return confirm(tryAgain ? 'Try again' : 'Do you want to play the game');
};

const validatePromptedValue = value => {

    const parsed = parseInt(value);

    if (isNaN(parsed)) {

        alert('Sorry Not a number, Goodbye');
        return false;
    }
    else if (parsed < 0 || parsed > 10) {

        alert('Sorry it’s not a good number, Goodbye');
        return false;
    }

    return parsed;
};

const compareNumbers = (userNumber, computerNumber) => {

    if (userNumber === computerNumber) {

        alert('WINNER!!!');
        return;
    }
    else if (userNumber > computerNumber) {

        alert('Your number is bigger than the computer’s');
    }
    else {

        alert('Your number is smaller than the computer’s');
    }

    playTheGame(true);
};


let computerValue = -1;

const playTheGame = (tryAgain) => {

    const wantToPlay = askIfWantToPlay(tryAgain);

    if (!wantToPlay) {

        alert('No problem goodbye...');
        return;
    }

    if (!tryAgain) {

        computerValue = -1;
    }

    const promptedValue = prompt('Guess a number between 0 - 10');

    const userNumber = validatePromptedValue(promptedValue);

    if (userNumber === false) return;


    computerValue = computerValue < 0 ? getRandomInteger(0, 10) : computerValue;

    console.log(computerValue);

    compareNumbers(userNumber, computerValue);
};
