/*
    Write variables to get the value of the attributes of the specified link :

    href
    hreflang
    rel
    target
    type
*/

const anchorTagElement = document.querySelector('#dI');

const arr = [
    anchorTagElement.getAttribute('href'),
    anchorTagElement.getAttribute('hreflang'),
    anchorTagElement.getAttribute('rel'),
    anchorTagElement.getAttribute('target'),
    anchorTagElement.getAttribute('type'),
];

console.log(arr)
