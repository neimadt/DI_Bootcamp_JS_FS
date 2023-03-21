const btn = document.querySelector('button');
const form = document.querySelector('form');
const table = document.querySelector('#sampleTable');
const tableBody = table.querySelector('tbody');


const onSubmit = (event) => {
    event.preventDefault();

    const tr = document.createElement('tr');

    // const currentChildrenCount = tableBody.children.length;
    const { children: { length: currentChildrenCount } } = tableBody;

    tr.innerHTML =
        `<td>Row${currentChildrenCount + 1} cell1</td>` +
        `<td>Row${currentChildrenCount + 1} cell2</td>`;

    tableBody.appendChild(tr);
};

// btn.addEventListener('click', onSubmit);

form.addEventListener('submit', onSubmit);

const btn2 = document.querySelector('#btn2');
btn2.onclick = onBtn2Click;

function onBtn2Click() {
    alert(this.innerHTML)
}

const btn3 = document.querySelector('#btn3');

const onBtn3Click = () => {
    alert(this.innerHTML)
}

btn3.onclick = onBtn3Click;
