const { argv } = require('node:process');

const num = argv[2];

if (Number.isNaN(Number(num))) {
    console.log('Not a number');
} else {
    console.log(`My number: ${parseInt(num)}`);
}
