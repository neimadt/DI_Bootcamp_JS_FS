const banner = document.querySelector('.banner');
const bannerValue = banner.querySelector('span');

let countdown = 5;
const intervalid = setInterval(() => {

    countdown -= 1;

    console.log(countdown)

    if (countdown < 0) {

        clearInterval(countdown);
        banner.classList.add('hidden');
    }
    else {

        bannerValue.textContent = countdown;
    }
}, 1000);
