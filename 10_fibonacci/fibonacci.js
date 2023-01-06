const fibonacci = function(a) {
    a = parseInt(a)
    if (a<0) return "OOPS" 
    else {
        let seq = [1, 1]
        let start
        for (let i = 2; i < a; i++) {
            start = seq[i-1] + seq[i-2]
            seq.push(start)
        }
        return (seq[a - 1])
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
