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

	possiblePrime++;

    }

    return primeSet;

};

//---------------------------------------------------------------------------------------------------

exports.primeSetSieve = function(n) {

    //Generates a set of prime numbers, primeSet,  of size, n, using a sieve method 

    var wholeNumber = require("../source/wholenumber.js");
    var integerSet = require("../source/integerset.js");
    
    var sieve = [],
	sieveSize = 0,
	sieveCounter = 0,
	primeSet = [],
	sieveEntry = 0,
	sieveHole = 0;

    //Check n is a whole number
    if (wholeNumber.isWholeNumber(n) === false) {
	console.log("Please enter a whole number");
	return 0;
    }
    
    // Generate the inital sieve of all integers from 2 to sieveSize
    sieveSize = 100;

    sieve = integerSet.integersFromTo(2, sieveSize);
    
    //Do until primeset is of size n
    while (primeSet.length < n) {

	//Find next entry of sieve that has not been deleted which will be the next prime
	while (typeof sieve[sieveEntry] === 'undefined') {
	    sieveEntry++;
	}
	
	primeSet.push(sieve[sieveEntry]);
	
	//Begin deleting entries of sieve from the square of the most recent prime
	sieveHole = Math.pow(primeSet[primeSet.length-1],2)-2;

	while (sieveHole < sieve.length) {

	    //Delete each multiple of the most recent prime within the sieve
	    delete sieve[sieveHole];
	    sieveHole += primeSet[primeSet.length-1];

	}

	sieveEntry++;
    }

    return primeSet;

};


