
const { forms: { libform: frm } } = document;
// const frm = document.forms.libform;

const handleSuccessOrError = frmCtrl => {

    let success = null, error = null;

    const inputElement = frmCtrl.querySelector('input');
    const errorSpanElement = frmCtrl.querySelector('.alert');

    errorSpanElement.classList.add('hidden');

    const { value, name } = inputElement;
    // const value = inputElement.value;
    // const name = inputElement.name;

    if (value) {

        success = value;
    }
    else {

        error = name;
        errorSpanElement.classList.remove('hidden');
    }


    const result = {
        success,
        error
    };

    return result;
};

const onSubmit = event => {

    event.preventDefault();

    const allErrors = [], allSuccess = [];

    const frmCtrls = frm.querySelectorAll('.form-control');

    for (const frmCtrl of frmCtrls) {

        const { success, error } = handleSuccessOrError(frmCtrl);

        if (success) {

            allSuccess.push(success);
        }
        else if (error) {

            allErrors.push(error);
        }
    }


    let sentence;

    const resultElement = document.querySelector('#story');

    if (allErrors.length > 0) {

        // const errorSentence = allErrors.join(', ');

        // alert(`${errorSentence} missing...`);
        // return;

        // sentence = `<b class="alert">${allErrors.join(', ')} missing...</b>`;
        sentence = `${allErrors.join(', ')} missing...`;

        resultElement.classList.add('alert');
    }
    else {

        sentence = allSuccess.join(' ');
        resultElement.classList.remove('alert');
    }

    resultElement.value = sentence;
};

frm.addEventListener('submit', onSubmit);


// const task = [
//     'Buy milk',
//     'Fetch the kids'
// ];

let idCounter = 0;

const tasks = [
];

const addTask = text => {

    idCounter += 1;

    tasks.push({
        text,
        id: `${Date.now()}-${idCounter}`,
        done: false
    });
};

addTask();
