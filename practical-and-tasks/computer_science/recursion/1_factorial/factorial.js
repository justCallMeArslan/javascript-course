const factorial = function (n) {

    if (!Number.isInteger(n) || typeof n !== "number" || n < 0) {
        return undefined
    }
    if (n === 0) {
        return 1;
    }
    return n === 1 ? 1 : factorial(n - 1) * n;
};

// Do not edit below this line
module.exports = factorial;