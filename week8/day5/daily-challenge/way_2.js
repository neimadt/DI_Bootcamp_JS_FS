const whiteSpaces = [' ', '\n', '\r', '\t'];

const isAnagram = (value, test, options) => {

    const { caseInsensitive, noWhitespaces } = options || {};

    if (!noWhitespaces && value.length !== test.length) return false;

    if (caseInsensitive) {

        value = value.toLowerCase();
        test = test.toLowerCase();
    }

    let values = [...value];
    let tests = [...test];

    if (noWhitespaces) {

        values = values.filter(s => whiteSpaces.indexOf(s) < 0);
        tests = tests.filter(s => whiteSpaces.indexOf(s) < 0);

        if (values.length !== tests.length) return false;
    }

    values = values.sort();
    tests = tests.sort();

    const sortedValue = values.join('');
    const sortedTest = tests.join('');

    console.log(sortedValue);
    console.log(sortedTest);

    return sortedValue === sortedTest;
};

const test = (value, test, options) => {

    return `"${value}" is an anagram of "${test}" > ${isAnagram(value, test, options)}`;
};

console.log(test('Astronomer', 'Moon starer'));
console.log(test('School master', 'The classroom'));
console.log(test('The Morse Code', 'Here come dots'));


console.log(test('Astronomer', 'Moon starer', { caseInsensitive: true }));
console.log(test('School master', 'The classroom', { caseInsensitive: true }));
console.log(test('The Morse Code', 'Here come dots', { caseInsensitive: true }));

console.log(test('Astronomer', 'Moon starer', { caseInsensitive: true, noWhitespaces: true }));
console.log(test('School master', 'The classroom', { caseInsensitive: true, noWhitespaces: true }));
console.log(test('The Morse Code', 'Here come dots', { caseInsensitive: true, noWhitespaces: true }));
