const btns = document.querySelectorAll('button');

const onClick = (e) => {

    const { target: btn, type } = e;
    // const btn = e.target;
    // const type = e.type;

    alert(`Button "${btn.innerHTML}" Clicked! ${type}`)
};

console.log(btns);

for (const btn of btns) {

    btn.addEventListener('click', onClick)
}
