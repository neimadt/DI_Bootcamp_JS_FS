
const setLikeCount = (count, popCount) => {

    const btnLike = document.querySelector('.btn-like');

    if (count > 0) {

        if (popCount) {

            btnLike.classList.add('is-liked', 'pop');
        }
        else {

            btnLike.classList.add('is-liked');
        }

        btnLike.style.setProperty('--like-count', `'${count > 9 ? '+9' : count}'`);

        if (popCount) {

            setTimeout(() => {
                btnLike.classList.remove('pop');
            }, 500);
        }
    }
    else {

        btnLike.classList.remove('is-liked');
        btnLike.style.setProperty('--like-count', `''`);
    }
};

export default setLikeCount;
