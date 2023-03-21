const btn = document.querySelector('button');
const btnReset = document.querySelector('#reset');

const onClick = ({ currentTarget }) => {

    let count = currentTarget.getAttribute('data-count');
    count = parseInt(count);
    count = count > 0 ? (count + 1) : 1;

    currentTarget.setAttribute('data-count', count);

    const timesWord = count === 0 || count > 1 ? 'times' : 'time';

    currentTarget.innerHTML = `<i>You clicked ${count} ${timesWord}</i>`;
};

const onMouseover = (e) => {
    e.currentTarget.style.borderColor = 'red';
};

const onMouseout = ({ currentTarget }) => {

    currentTarget.style.borderColor = '';
};

const onReset = () => {

    btn.style.borderColor = '';
    btn.removeAttribute('data-count');
    btn.innerHTML = '<i>You clicked 0 times</i>';
};

btn.addEventListener('click', onClick);
btn.addEventListener('mouseover', onMouseover);
btn.addEventListener('mouseout', onMouseout);

btnReset.addEventListener('click', onReset);
btnReset.addEventListener('mouseover', onMouseover);
btnReset.addEventListener('mouseout', onMouseout);
