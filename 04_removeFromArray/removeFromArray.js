const removeFromArray = function(array, ...args) {
    for (const arg of args) {
        if (array.indexOf(arg) != -1) {
            array.splice(array.indexOf(arg),1)   
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
