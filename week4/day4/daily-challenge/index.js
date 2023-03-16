/*
99 bottles of beer on the wall
99 bottles of beer
Take 1 down, pass it around
98 bottles of beer on the wall
*/

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


// for (let count = bottleCount; count > 0;) {
//     downValue = downValue > count ? count : downValue;

//     if (count > 0) {

//         lyrics += getIterationLines(count, downValue);
//     }

//     count -= downValue;
//     downValue += 1;

//     lyrics += getIterationLines(count, downValue, true);
// }


// do {

//     downValue = downValue > bottleCount ? bottleCount : downValue;

//     if (bottleCount > 0) {

//         lyrics += getIterationLines(bottleCount, downValue);
//     }

//     bottleCount -= downValue;
//     downValue += 1;

//     lyrics += getIterationLines(bottleCount, downValue, true);
// } while (bottleCount > 0);

console.log(lyrics)