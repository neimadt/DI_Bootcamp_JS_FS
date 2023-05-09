
const loadXml = (xmlDoc) => {

    const cd = xmlDoc.getElementsByTagName("email");

    for (let i = 0; i < cd.length; i++) {

        console.log(cd[i].getElementsByTagName("to")[0].childNodes[0].nodeValue);

        console.log(cd[i].getElementsByTagName("from")[0].childNodes[0].nodeValue);
    }
}

(() => {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://zivuch.github.io/emails.xml');

    xhr.withCredentials = false;

    xhr.responseType = 'document';

    xhr.onload = () => {
        if (xhr.status != 200) {
            console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
        }
        else {
            console.log(xhr.response);
            loadXml(xhr.response);
        }
    }

    xhr.onprogress = (event) => {

        if (event.lengthComputable) {

            console.log(`Received ${event.loaded} of ${event.total} bytes`);
        }
        else {

            console.log(`Received ${event.loaded} bytes`); // no Content-Length
        }
    };

    xhr.onerror = () => {

        console.log('Error something wrong###');
    };

    xhr.send();
})()