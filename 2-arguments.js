const { argv } = require('node:process');

const argumentCount = argv.length - 2;

if (argumentCount < 1) {
    console.log('No argument');
} else if (argumentCount === 1) {
    console.log('Argument found');
} else {
    console.log('Arguments found');
}
