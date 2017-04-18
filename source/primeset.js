//Methods for generating sets of primes

exports.primeSetBrute = function(n) {

    //Generates a set of prime numbers of size, n, by comparing to all previous primes

    var wholeNumber = require("../source/wholenumber.js");
    
    var prime = [],
	i = 0,
	j = 0,
	isPrime = false;

    //Check n is a whole number
    if (wholeNumber.isWholeNumber(n) === false) {
	console.log("Please enter a whole number");
	return 0;
    }
    
    //Begin method with first prime, 2, and first number to check, 3
    prime[0] = 2;
    i = 3;

    //Do until the array prime is of size n 
    while (prime.length < n) {

	isPrime = true;

	//Compare possible prime, i, to all currently found primes
	for (j = 0; j < prime.length; j++) {

	    if (i % prime[j] === 0) {

		isPrime = false;
		break;

	    } else if (Math.pow(prime[j],2) > i) {
		//Stop checking if current prime squared is larger than i
		break;

	    }
	}

	//If found to be prime, push onto array of found primes
	if (isPrime === true) {

	    prime.push(i);

	}

	i++

    }

    return prime;

};
