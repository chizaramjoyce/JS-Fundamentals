const { argv } = require('node:process');

const firstArgument = argv[2] ?? 'No argument';

console.log(firstArgument);
