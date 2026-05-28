const permutations = function (arr) {
    if (!Array.isArray(arr)) {
        return [];
    }

    if (arr.length <= 1) {
        return [arr];
    }

    let order = [];

    for (let i = 0; i < arr.length; i++) { // basic conditions for loop , to check 
        // till end of array
        const curr = arr[i]; // chooses first element of branch
        const rem = arr.slice(0, i).concat(arr.slice(i + 1)); // creating new array without arr[i]
        // 0, i = left part from current and i + 1, items right of i

        const perms = permutations(rem); // recursively generate permutations of rem 

        for (const perm of perms) {
            order.push([curr, ...perm]) // concats curr (arr[i]) and permutated array rem
        }
    }
    return order;
};

// Do not edit below this line
module.exports = permutations;
