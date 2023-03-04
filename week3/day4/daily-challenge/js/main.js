const sentence = 'The movie is not really that bad, I like it';
// const sentence = 'This dinner is bad, do not cook again!';
// const sentence = 'This dinner is bad!';
// const sentence = 'This is dinner!';
// const sentence = 'This is not dinner!';

const word1 = 'not';
const word2 = 'it';

const replaceWith = 'fantastic'

const positionWord1 = sentence.indexOf(word1);
console.log(positionWord1);

const positionWord2 = sentence.indexOf(word2);
console.log(positionWord2);

if (positionWord1 >= 0 && positionWord1 < positionWord2) {

    console.log('in if');

    const toReplace = sentence.substring(positionWord1, positionWord2 + word2.length);
    console.log(toReplace);

    const newSentence = sentence.replace(toReplace, replaceWith)
    console.log(newSentence);
}
else {

    console.log(sentence);
}

const users = [];

console.log(users.length)