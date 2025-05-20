const { argv } = require('node:process');

function factorial(num) {
    if (Number.isNaN(Number(num))) {
        return 1;
    } else {
        const count = parseInt(num);

        if (count <= 1) {
            return 1;
        } else {
            return count * factorial(count - 1);
        }
    }
}

console.log(factorial(argv[2]));
