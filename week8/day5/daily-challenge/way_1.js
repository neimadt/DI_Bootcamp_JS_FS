const whiteSpaces = [' ', '\n', '\r', '\t'];


const stringToDico = str => {

    const result = [...str].reduce((acc, char) => {

        if (char && whiteSpaces.indexOf(char) < 0) {

            char = char.toLowerCase();

            if (acc[char] > 0) {

                acc[char] += 1;
            }
            else {

                acc[char] = 1;
            }

            acc.__total += 1;
        }

        return acc;
    }, { __total: 0 });

    return result;
};

const isAnagram = (value, test) => {

    let incompatibilityFound = true;

    const { __total: valueCharsTotal, ...valueDico } = stringToDico(value);
    const { __total: testCharsTotal, ...testDico } = stringToDico(test);

    console.log(valueDico, testDico)
    if (valueCharsTotal === testCharsTotal) {

        incompatibilityFound = Object.keys(valueDico).some(key => valueDico[key] !== testDico[key]);
    }

    return !incompatibilityFound;
};

console.log('Astronomer', 'Moon starer', isAnagram('Astronomer', 'Moon starer'));
// console.log('School master', 'The classroom', isAnagram('School master', 'The classroom'));
// console.log('The Morse Code', 'Here come dots', isAnagram('The Morse Code', 'Here come dots'));