const { argv } = require('node:process');

const num = argv[2];

if (Number.isNaN(Number(num))) {
    console.log('Missing number of occurrences');
} else {
    let count = parseInt(num);

    while (count > 0) {
        console.log('C is fun');
        count--;
    }
}
