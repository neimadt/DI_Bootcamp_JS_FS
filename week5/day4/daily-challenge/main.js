
const { forms: { libform: frm } } = document;
// const frm = document.forms.libform;

const onSubmit = event => {

    event.preventDefault();

    // const frmData = new FormData(frm);
    // const fdata = Object.fromEntrie Gs(frmData);

    const inputNoun = frm.noun;
    const inputAdjective = frm.adjective;
    const inputPerson = frm.person;

    const success = [], errorsFound = [];

    if (inputNoun.value) {

        // const alertSpan = document.querySelector('.alert.alert-noun');
        // alertSpan.classList.add('hidden');

        success.push(inputNoun.value);
    }
    else {

        // const alertSpan = document.querySelector('.alert.alert-noun');
        // alertSpan.classList.remove('hidden');

        errorsFound.push('Noun');
    }

    if (inputAdjective.value) {

        success.push(inputAdjective.value);
    }
    else {

        errorsFound.push('Adjective');
    }

    if (inputPerson.value) {

        success.push(inputPerson.value);
    }
    else {

        errorsFound.push('Someone\'s Name');
    }

    if (errorsFound.length > 0) {

        const sentence = errorsFound.join(', ');

        alert(`${sentence} missing.`);
        return;
    };

    const sentence = success.join(' ');

    alert(`SUCCESS ${sentence}`);
};

frm.addEventListener('submit', onSubmit);

const radius = 8;
const cube = radius ** 3;
console.log(cube)

const volume = (4 / 3) * Math.PI * (radius ** 3);

console.log(volume)
console.log(Math.PI, (22 / 7))
