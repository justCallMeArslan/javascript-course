const pascal = function (n) {

    let first = [1];


    for (let row = 1; row < n; row++) {

        const newArr = [0, ...first, 0];
        let next = [];

        for (let j = 0; j < newArr.length - 1; j++) {
            next.push(newArr[j] + newArr[j + 1]);
        }

        first = next;

    }
    return first;
};

pascal(4);


// Do not edit below this line
module.exports = pascal;
