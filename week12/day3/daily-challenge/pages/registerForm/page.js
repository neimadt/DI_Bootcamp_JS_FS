console.log('Im the register form js')

document.forms[0].addEventListener('submit', async e => {

    e.preventDefault();

    try {

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        const body = JSON.stringify(data);

        const resp = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body
        });

        if (!resp.ok) {

            if (resp.status === 400) {

                const { error } = await resp.json();

                alert(error);

                return;
            }

            throw new Error('Somthing went wrong');
        }


        const result = await resp.json();
    }
    catch (err) {

        console.error(err);
    }
});