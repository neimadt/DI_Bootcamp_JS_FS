
document.forms[0].addEventListener('submit', async e => {

    e.preventDefault();

    try {

        const formdata = new FormData(e.currentTarget);
        const data = Object.fromEntries(formdata);

        const url = e.currentTarget.getAttribute('action');
        const method = e.currentTarget.getAttribute('method');

        const resp = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!resp.ok) throw new Error('Something went wrong');

        alert('Successfully Create new User!');
    }
    catch (err) {

        console.error(err);
        alert(err);
    }
});

document.querySelector('button[type="button"]').addEventListener('click', async () => {

    try {

        const resp = await fetch('/api/users');

        if (!resp.ok) throw new Error('Something went wrong');

        const data = await resp.json();

        showUsers(data.users);
    }
    catch (err) {

        console.error(err);
        alert(err);
    }
});

const showUsers = data => {

    const root = document.querySelector('#root');
    root.innerHTML = '';

    data.forEach(item => {

        const div = document.createElement('div');

        div.innerText = item.username;

        root.appendChild(div)
    });
};
