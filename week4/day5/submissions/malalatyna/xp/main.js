function playTheGame() {

    let text = confirm("Would you like to play a game?");

    if (!text) {
        alert("No problem, goodbye.");
        return;
    }

    let userNumber = Number(prompt("Please enter a number between 0 and 10"));

    if (isNaN(userNumber)) {

        alert("Sorry, not a number. Goodbye.");
        return;
    }

    if (0 > userNumber || userNumber > 10) {

        alert("Sorry, not a good number. Goodbye.");
        return;
    }

    const computerNumber = Math.round(Math.random() * 10);

    function compareNumbers(userNumber, computerNumber) {
        let numberOfGuesses = 1;
        while (numberOfGuesses <= 3) {

            if (userNumber === computerNumber) {
                alert("WINNER!");
                return;
            } else if (userNumber > computerNumber) {
                userNumber = Number(prompt("Your number is bigger than the computer's, guess again:"));
            } else {
                userNumber = Number(prompt("Your number is smaller than the computer's, guess again:"));
            }
            numberOfGuesses++;
        }
        alert("Out of chances. The number was " + computerNumber + ".");
    }

    compareNumbers(userNumber, computerNumber);
}