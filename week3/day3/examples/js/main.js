let studentAskingQuestion = 'jean-luci';

console.log(studentAskingQuestion)

switch (studentAskingQuestion) {

    case 'jaysen':
        console.log('Oui Jaysen')
        break;
    case 'jean-luc':
        console.log('Oui Jean-Luc')
        break;

    case 'alexis':
        console.log('Oui Jaysen from full-time')
        break;

    case 'reagan':
        console.log('Yes Reagan')
        break;

    default:
        console.log('Silence')
        break;
}

const person = {
    fname: 'Bob',
    lname: 'Bobson',
    getFullname() {
        return `${this.fname} ${this.lname}`
    }
};

console.log(person.getFullname());

const checkForLetter = (word, letter) => {

    const lowercaseWord = word.toLowerCase();
    const lowercaseLetter = letter.toLowerCase();

    return lowercaseWord.indexOf(lowercaseLetter)
};

const letterIndex = checkForLetter(studentAskingQuestion, 'J');

console.log(letterIndex)
if (checkForLetter(studentAskingQuestion, 'J') >= 0) {
    console.log('Student has letter j in his/her name')
}

// if (studentAskingQuestion === 'jaysen') {

//     console.log('Oui Jaysen, in IF')
// }
// else if (studentAskingQuestion === 'jean-luc') {

//     console.log('Oui Jean-Luc')
// }
// else if (studentAskingQuestion === 'alexis') {

//     console.log('Oui Jaysen from full-time')
// }
// else if (studentAskingQuestion === 'reagan') {

//     console.log('Yes Reagan')
// }
// else {

//     console.log('Silence, from IF')
// }

console.log('After switch')