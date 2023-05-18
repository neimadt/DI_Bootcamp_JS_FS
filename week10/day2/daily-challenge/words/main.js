

const makeAllCaps_ = (arr) => {

    console.log(arr)
};

makeAllCaps_(["apple", "pear", "banana"]);


const makeAllCaps = (...words) => {

    console.log(words)

    const foundNotString = words.some(word => typeof word !== 'string');

    if (foundNotString) throw new Error('Not all words are strings');

    const sorted = words.sort();
    sorted;
};

makeAllCaps("apple", "pear", "banana", 'orange');
