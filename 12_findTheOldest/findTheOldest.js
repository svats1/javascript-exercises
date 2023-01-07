const findTheOldest = function(people) {
    let date = new Date()
    let currentYear = date.getFullYear()
    let ages = []

    for (let i = 0; i < people.length; i++) {
        let endYear = people[i].yearOfDeath || currentYear
        ages.push(endYear - people[i].yearOfBirth)
    }
    
    return (people[ages.indexOf(Math.max(...ages))])
    

};

// Do not edit below this line
module.exports = findTheOldest;
