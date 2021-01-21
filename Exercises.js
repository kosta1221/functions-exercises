//Question 1
function myReverse(str) {
	let result = "";
	for (let i = 0; i < str.length; i++) {
		result += str.charAt(str.length - i - 1);
	}
	console.log(result);
	return result;
}
//Question 2
function allCombinations(str) {
	let combinations = [];
	let strToAdd = "";
	let strCopy = str;
	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < strCopy.length; j++) {
			strToAdd += strCopy.charAt(j);
			combinations.push(strToAdd);
		}
		strCopy = str.substring(i + 1, str.length);
		strToAdd = "";
	}
	return combinations;
}
//Question 3
function allCaps(str) {
	let result = str.charAt(0).toUpperCase();
	let CharToInsert = "";
	for (let i = 1; i < str.length; i++) {
		if (str.charAt(i) === " ") {
			CharToInsert = " " + str.charAt(i + 1).toUpperCase();
			i++;
		} else {
			CharToInsert = str.charAt(i);
		}
		result += CharToInsert;
	}
	return result;
}
//Question 4
function myPower(x, n) {
	let result = x;
	while (n > 0) {
		result *= x;
		n--;
	}
	return result;
}
//console.log(myPower(2,16));
//Question 5
function getFirstNotRepeating(str) {
	let repeatingChars = [];
	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < str.length; j++) {
			if (str.charAt(j) === str.charAt(i) && i !== j) {
				repeatingChars.push(str.charAt(j));
			}
		}
	}
	for (let i = 0; i < str.length; i++) {
		if (!repeatingChars.includes(str.charAt(i))) {
			return str.charAt(i);
		}
	}
	console.log("Every character in this string repeats at least once");
	return "";
}
//console.log(getFirstNotRepeating("aassddftty")); // returns f
//Question 6 (Bonus)
/* a perfect number is a positive integer that is equal to the sum of its proper

positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum.

Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.

Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next

perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128. */

function isPrefectNumber(num) {
	let sum = 0;
	for (let i = 1; i < num; i++) {
		if (num % i === 0) {
			sum += i;
		}
	}
	return sum === num;
}
// console.log(isPrefectNumber(28)); // returns true
// console.log(isPrefectNumber(29)); // returns false
// console.log(isPrefectNumber(496)); // returns true
// console.log(isPrefectNumber(497)); // returns false
// *** Playground ***
// Feel free to run and test your code here on your own

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
