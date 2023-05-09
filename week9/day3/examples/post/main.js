
document.forms.articleBlog.addEventListener('submit', e => {

    e.preventDefault();
    debugger;

    const formData = new FormData(document.forms.articleBlog);

    const formDataObject = Object.fromEntries(formData);

    const formDataJson = JSON.stringify(formDataObject);
    console.log(formDataJson);

    // send it out

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.responseType = 'json';

    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

    xhr.send(formDataJson);
    xhr.onload = () => {
        debugger;

        const data = xhr.response;

        console.log(data);
    }
})