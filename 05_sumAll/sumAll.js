const sumAll = function(num1,num2) {
    let sum = 0
    // If both numbers are actually numbers
    if (typeof num1 != 'string' && typeof num2 != 'string'
    && num1 >= 0 && num2 >=0) {    
        // If first number is smaller, do this loop
        if (num1 < num2) {
            for (i=num1; i<=num2; ++i) {
                sum += i
            }
            return sum
        }
        
        // If first number is bigger, do this loop
        else if (num1 > num2) {
            for (i=num1; i>=num2; --i) {
                sum += i
            }
            return sum
        }
        
    }
    
    // If any entry condition is not met
    else {
        return "ERROR"
    }
    
};

// Do not edit below this line
module.exports = sumAll;
