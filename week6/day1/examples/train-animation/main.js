// click event
train.addEventListener("click", trainPassing)

function trainPassing() {

    let start = Date.now();

    let timer = setInterval(function () {

        let timePassed = Date.now() - start;

        console.log(timePassed)

        train.style.left = timePassed / 5 + 'px';
        train.style.top = timePassed / 5 + 'px';

        if (timePassed > 2000) {

            clearInterval(timer);
        }
    }, 20);
}