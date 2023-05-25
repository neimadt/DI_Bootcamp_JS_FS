
const { forms: [form] } = document;

form.addEventListener('submit', e => {

    e.preventDefault();
});

const start = async () => {

    try {

        const resp = await fetch('https://v6.exchangerate-api.com/v6/f926ddf5f970257f35716abe/codes');
        const { supported_codes } = await resp.json();

        // const codes = Object.fromEntries(supported_codes);

        const innerHtml = supported_codes.map(([key, value]) => {

            return `<option ${key === 'MUR' ? 'selected' : ''} value="${key}">${key} - ${value}</option>`;
        }).join('');

        form.curfrom.innerHTML = innerHtml;
        form.curto.innerHTML = innerHtml;
    }
    catch (err) {

        console.error(err);
    }
};

start();