const { argv } = require('node:process');

const num = argv[2];

if (Number.isNaN(Number(num))) {
    console.log('Missing size');
} else {
    let count = parseInt(num);
    
    if (count > 0) {
        let text = '';

        for (let i = 1; i <= count; i++) {
            text += 'X';
        }

        for (let i = 1; i <= count; i++) {
            console.log(text);
        }
    }
}
