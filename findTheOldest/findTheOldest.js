let findTheOldest = function (people) {
	let oldest = people.sort(function (fPerson, sPerson) {
		let fPersonAge = (fPerson.yearOfDeath || 2021) - fPerson.yearOfBirth;
		let sPersonAge = (sPerson.yearOfDeath || 2021) - sPerson.yearOfBirth;
		if (fPersonAge > sPersonAge) {
			return -1;
		} else {
			return 1;
		}
	});
	return oldest[0];
};

module.exports = findTheOldest;
