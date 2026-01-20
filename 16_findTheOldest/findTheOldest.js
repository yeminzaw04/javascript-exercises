const findTheOldest = people => people.reduce((oldest, person) => {
    let currentYear = new Date().getFullYear();
    let ageOfOldest = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : currentYear - oldest.yearOfBirth;
    let ageOfPerson = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currentYear - person.yearOfDeath;
    return ageOfOldest > ageOfPerson ? oldest : person;
});

// Do not edit below this line
module.exports = findTheOldest;
