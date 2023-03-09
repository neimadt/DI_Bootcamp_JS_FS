const linesTotal = 6;


// for (let i = 0; i < linesTotal; i++) {

//     const line = ''.padEnd(i + 1, '*')

//     console.log(line)
// }



let str = '';

for (let i = 0; i < linesTotal; i++) {

    str += '*';

    console.log(str)
}

// for (let i = 0; i < linesTotal; i++) {

//     let line;

//     switch (i) {

//         case 0:
//             line = '*';
//             break;

//         case 1:
//             line = '**';
//             break;

//         case 2:
//             line = '***';
//             break;

//         case 3:
//             line = '****';
//             break;

//         case 4:
//             line = '*****';
//             break;

//         case 5:
//             line = '******';
//             break;
//     }

//     console.log(line)
// }

// for (let i = 1; i <= linesTotal; i++) {

//     let line = '';

//     for (let j = 0; j < i; j++) {

//         line += '*';
//     }

//     console.log(line);
// }

let result = '';

for (let i = 1; i <= linesTotal; i++) {

    for (let j = 0; j < i; j++) {

        result += '*';
    }

    result += '\n';
}

console.log(result);
