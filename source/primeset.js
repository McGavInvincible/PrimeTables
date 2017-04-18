//Methods for generating sets of primes

exports.primeSetBrute = function(n) {

    //Generates a set of prime numbers, primeSet,  of size, n, by comparing to all previous primes

    var wholeNumber = require("../source/wholenumber.js");
    
    var primeSet = [],
	possiblePrime = 0,
	nthPrime = 0,
	isPrime = false;

    //Check n is a whole number
    if (wholeNumber.isWholeNumber(n) === false) {
	console.log("Please enter a whole number");
	return 0;
    }
    
    //Begin method with first prime, 2, and first possible prime, 3
    primeSet[0] = 2;
    possiblePrime = 3;

    //Do until the array primeSet is of size n 
    while (primeSet.length < n) {

	isPrime = true;

	//Compare possible prime to all currently found primes in primeSet
	for (nthPrime = 0; nthPrime < primeSet.length; nthPrime++) {

	    if (possiblePrime % primeSet[nthPrime] === 0) {

		isPrime = false;
		break;

	    } else if (Math.pow(primeSet[nthPrime],2) > possiblePrime) {
		//Stop checking if nthprime in primeSet squared is larger than possiblePrime
		break;

	    }
	}

	//If possible prime found to be prime, push onto array of found primes
	if (isPrime === true) {

	    primeSet.push(possiblePrime);

	}

	possiblePrime++

    }

    return primeSet;

};
