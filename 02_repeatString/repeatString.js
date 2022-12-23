const repeatString = function(string, num) {
    let input = ""
    if (num >= 0) {
        for (let i=0; i<num; ++i) {
            input += string
        }
        return input
    }
    else {
        return "ERROR"
    }
    
    
};

// Do not edit below this line
module.exports = repeatString;
