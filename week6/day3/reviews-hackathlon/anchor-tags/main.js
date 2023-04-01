
const form = document.forms[0];

form.addEventListener('submit', () => {


});

document.querySelector('#btnPrint').addEventListener('click', () => {
    const quoteNumber = '234jhgdsf';

    const previousTitle = document.title;

    document.title = `Quotation #${quoteNumber}`;
    window.print();
    document.title = previousTitle;

});