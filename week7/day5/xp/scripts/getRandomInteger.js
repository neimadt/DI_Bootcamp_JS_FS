
const getRandomInteger = (minInclusiveValue, maxInclusiveValue) => {

    const randomNumber = Math.random();

    let value = (randomNumber * (maxInclusiveValue - minInclusiveValue + 1)) + minInclusiveValue;
    value = Math.floor(value);

    return value;
};

export default getRandomInteger;
