const findTheOldest = function(people) {
  let ageIncluded = people.map(person => (
    {
      name: person.name,
      age: (person.yearOfDeath === undefined) ? (2022 - person.yearOfBirth) : (person.yearOfDeath - person.yearOfBirth),
    }
  ));
  return ageIncluded.reduce((prev, current) => (prev.age > current.age) ? prev : current);
}

// Do not edit below this line
module.exports = findTheOldest;
