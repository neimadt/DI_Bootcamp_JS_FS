const playTheGame = () => {
    const computerNumber = Math.floor(Math.random() * 9) + 1; // get number from 1 to 9
    console.log(computerNumber)
    let confirmation = confirm("Are you sure you want to play this game?")

    if (!confirmation) {
        alert("No problem, Goodbye")
    } else {
        numberPrompt = prompt("please enter a number between 0 and 10")
        numberPrompt = parseInt(numberPrompt)

        /* 
        if(isNaN(numberPrompt) || numberPrompt.length < 1){
            alert("Sorry Not a number, Goodbye")
        }else{
            if(numberPrompt > 0 && numberPrompt < 10){
                compareNumbers(numberPrompt, computerNumber)
            }else{
                alert("Sorry it’s not a good number, Goodbye")
            }
        } 
        */

        //Bonus Exercise using While Loop
        while (isNaN(numberPrompt) || numberPrompt.length < 1) {
            numberPrompt = prompt("please enter a number between 0 and 10")
        }

        if (numberPrompt > 0 && numberPrompt < 10) {
            compareNumbers(numberPrompt, computerNumber)
        } else {
            alert("Sorry it’s not a good number, Goodbye")
        }


    }
}

const compareNumbers = (userNumber, computerNumber) => {
    let attempts = 3

    while (attempts > 0 && userNumber != computerNumber) {
        if (userNumber < computerNumber) {
            alert("Your number is smaller then the computer’s, guess again")
        } else {
            alert("Your number is greater than the computer’s, guess again")
        }
        userNumber = parseInt(prompt('Enter new number between 0 and 10'))
        attempts--
    }

    if (attempts == 0) {
        alert("You are out of attempts")
    }

    alert("Congratulations! You are a WINNER!!!!")

}