function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function multiply(arr) {
	let multi = 1;
	for (let i = 0; i < arr.length; i++) {
		multi *= arr[i];
	}
	return multi;
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(nToFactor) {
	let result = 1;
	if (nToFactor === 0) {
		return 1;
	} else {
		for (i = 1; i <= nToFactor; i++) {
			result *= i;
		}
		return result;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
