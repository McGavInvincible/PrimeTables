exports.primeTableGenerator = function(n) {

    //Returns a table of prime multiples with the prime numbers as row and column headers
    
    var primeSet = require("../source/primeset.js"),
	arrayMultiply = require("../source/arraymultiply.js"),
	multipleTable = require("../source/createmultipletable.js"),
	primeTableDisplay = require("../source/primetabledisplay.js");

    if (n < 100000) {
	primes = primeSet.primeSetBrute(n);
    } else {
	primes = primeSet.primeSetSieve(n);
    }

    multiTable = arrayMultiply.arrayMultiply(primes, primes);

    outputArray = multipleTable.createMultipleTable(primes, primes, multiTable);

    return outputArray;
    
}
