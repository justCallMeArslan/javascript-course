const contains = function (object, target) {
    for (let key in object) { // search for a keys in object
        let value = object[key]; // store value of each key:value 

        if (value === target) { // checks for direct equaities
            return true;
        }

        if (typeof value === "object" && value !== null) {
            if (contains(value, target)) {
                return true;
            }
        }

        if ((Number.isNaN(value) && Number.isNaN(target)) || value === target) {
            return true;
        }
    }
    return false;
};

// Do not edit below this line
module.exports = contains;
