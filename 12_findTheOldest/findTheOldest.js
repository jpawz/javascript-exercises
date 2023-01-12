const findTheOldest = function(people) {
    const currentYear = (new Date().getFullYear());

    return people.sort((a, b) => 
    (a.yearOfBirth - (a.yearOfDeath ? a.yearOfDeath : currentYear)
    - (b.yearOfBirth - (b.yearOfDeath ? b.yearOfDeath : currentYear))))[0];

};

// Do not edit below this line
module.exports = findTheOldest;
