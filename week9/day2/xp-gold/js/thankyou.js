
const getDataFromUrl = () => {

    let { location: { search: pageData } } = window;

    pageData = pageData.substring(1);
    pageData = pageData.split('&');
    pageData = pageData.map(s => s.split('='));

    const data = Object.fromEntries(pageData);

    return data;
};

const data = getDataFromUrl();


console.log(data)

const h1Element = document.querySelector('h1');

let { innerHTML } = h1Element;

console.log(innerHTML)

innerHTML = innerHTML
    .replace(/{{fname}}/g, data.fname)
    .replace(/{{lname}}/g, data.lname);

h1Element.innerHTML = innerHTML;
