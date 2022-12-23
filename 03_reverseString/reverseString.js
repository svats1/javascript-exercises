const reverseString = function(string) {
    let input = string
    let reverseString = ''
    for (let i=input.length-1; i>=0; --i) {
        reverseString += input[i]
    }
    return reverseString
};

// Do not edit below this line
module.exports = reverseString;
