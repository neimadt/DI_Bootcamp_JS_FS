const ulElement = document.querySelector('ul');
// ulElement.setAttribute('style', 'color: red;');
ulElement.style.color = 'red';

console.log(
    ulElement.getAttribute('style')
);

// ulElement.setAttribute('class', `${ulElement.getAttribute('class')} red-color`);
// ulElement.className = `${ulElement.className} red-color`;
// ulElement.className = '';
ulElement.classList.add('red-color', 'purple-color', 'green-color');
ulElement.classList.toggle('red-color');
ulElement.classList.remove('some-class');

console.log(
    ulElement.hasAttribute('class')
)

ulElement.setAttribute('data-something', 'xxx')
console.log(
    ulElement.hasAttribute('data-something')
)

ulElement.removeAttribute('data-something')
console.log(
    ulElement.hasAttribute('data-something')
)

let attrs = '';

for (let attr of ulElement.attributes) { // Lists all attributes
    attrs += `${attr.name}="${attr.value}"\n`
}

console.log(attrs)
