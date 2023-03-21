const totalCount = prompt('Enter number of bottles'); // '33';
let bottleCount = parseInt(totalCount);
bottleCount = bottleCount > 0 ? bottleCount : 0;

const getIterationLines = (count, downValue, islastline) => {

    const bottleWord = count > 1 ? 'bottles' : 'bottle';
    const takeDownWord = downValue > 1 ? 'them' : 'it';

    if (islastline) {

        // if (count === 0) return 'No bottle of beer on the wall';

        return `${count} ${bottleWord} of beer on the wall` + (count > 0 ? '\n\n' : '');
    }

    const result =
        `${count} ${bottleWord} of beer on the wall\n` +
        `${count} ${bottleWord} of beer\n` +
        `Take ${downValue} pass ${takeDownWord} around\n`;

    return result;
};

let lyrics = '';

let downValue = 1;
while (bottleCount > 0) {

    downValue = downValue > bottleCount ? bottleCount : downValue;

    lyrics += getIterationLines(bottleCount, downValue);

    bottleCount -= downValue;
    downValue += 1;

    lyrics += getIterationLines(bottleCount, downValue, true);
}
console.log(lyrics)