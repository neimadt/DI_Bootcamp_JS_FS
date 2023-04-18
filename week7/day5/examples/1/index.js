
function concatNames() {

    console.log(arguments)

    let result = '';
    for (const s of arguments) {

        result += (result ? ' ' : '') + s;
        // result += s + ' ';
    }
    // return [...arguments].join(' ');
    return result;
};

const concatNamesNewWay = (fname, ...args) => {

    console.log(args)

    let result = '';
    for (const s of args) {

        result += (result ? ' ' : '') + s;
        // result += s + ' ';
    }
    // return [...arguments].join(' ');
    return fname + ' ' + result;
};

console.log(concatNames('J', 'F', 'Damien', 'T') + '!!!');
console.log(concatNamesNewWay('J', 'F', 'Damien', 'T') + '!!!');