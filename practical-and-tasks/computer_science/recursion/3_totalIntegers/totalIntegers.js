const totalIntegers = function (data) {
    if (data === null || typeof data !== "object") { // validating initial data 
        return undefined;
    }

    function countCheck(value) {
        let count = 0;
        if (Number.isInteger(value)) {
            return 1;
        }
        if (value === null || typeof value !== "object") {
            return 0;
        }
        for (const key in value) {
            count += countCheck(value[key])
        }
        return count;
    }

    return countCheck(data);

};

// Do not edit below this line
module.exports = totalIntegers;
