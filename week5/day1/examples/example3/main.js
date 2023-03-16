
const numberOfSquares = 1252;

// for (let i = 0; i < numberOfSquares; i++) {

const squareElement = document.createElement('div');
squareElement.classList.add('red-square');

document.body.appendChild(squareElement);
// }

const circleElement = document.createElement('div');
circleElement.classList.add('yellow-circle');
squareElement.appendChild(circleElement);

circleElement.innerHTML = 'Hey'

// setTimeout(() => {

//     squareElement.remove();

//     setTimeout(() => {

//         document.body.innerHTML = '<div class="red-square" />';
//     }, 1000);
// }, 3000);
