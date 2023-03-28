const countUp = document.querySelector('.count-up');
const btnKillInterval = document.querySelector('#btnKillInterval');

let intervalid;

const run = () => {

    intervalid = setInterval(() => {

        const value = parseInt(countUp.textContent);

        const newValue = value + 1;

        countUp.textContent = newValue;

        if (newValue >= 59) {
            clearInterval(intervalid);
        }
    }, 1000);
};

btnKillInterval.addEventListener('click', () => {

    if (intervalid > 0) {

        clearInterval(intervalid);
        intervalid = 0;

        btnKillInterval.textContent = 'Start interval';
    }
    else {

        run();
        btnKillInterval.textContent = 'Kill interval';
    }
});
