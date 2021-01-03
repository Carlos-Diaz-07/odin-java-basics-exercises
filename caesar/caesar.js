function comp(num) {	// to adjust big shift factors
	if (num > 26) {
		return Math.round(num/-26);
	} else if (num < -26) {
		return Math.round((num/26)-2);
	} else {
		return num;
	}
}


const caesar = function (string, key) {
	let arr = [];
	let n = comp(key);
	for (i = 0; i < string.length; i++) {
		let originalChar = string.charCodeAt(i);
		let newChar = string.charCodeAt(i) + n;
		let testRegex = /\w|\d/;

		if (testRegex.test(string.charAt(i))) {	// check that the char is a letter or number
			if (originalChar >= 97 && originalChar <= 122) {	// makes the cipher wrap around the lowercase alphabet
				if (newChar > 122) {
					arr.push(newChar - 26);
				} else if (newChar < 97) {
					arr.push(newChar + 26);
				} else {
					arr.push(newChar);
				}
			} else if (originalChar >= 65 && originalChar <= 90) {	// makes the cipher wrap around the uppercase alphabet
				if (newChar > 90) {
					arr.push(newChar - 26);
				} else if (newChar < 65) {
					arr.push(newChar + 26);
				} else {
					arr.push(newChar);
				}
			} else {
				arr.push(newChar);	// for pushing numbers
			}
		} else {
			arr.push(originalChar);
		}
	}
	return String.fromCharCode.apply(this, arr);
};

module.exports = caesar;
