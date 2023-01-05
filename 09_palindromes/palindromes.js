const palindromes = function (a) {
    let forward = Array.from(a)
    let punctuation = [' ', '.', ',', '!']
    forward = forward.filter((item) => !punctuation.includes(item))
    
    let reverse = []
    forward.forEach(element => {
        reverse.unshift(element)
    });

    const str1 = forward.join('').toLowerCase()
    const str2 = reverse.join('').toLowerCase() 
    
    return (str1.localeCompare(str2) == 0)
}

// Do not edit below this line
module.exports = palindromes;
