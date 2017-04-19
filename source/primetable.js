/*Takes in a whole number, n, from the user, generates a set of primes of size n and then displays a table
  of the prime sets as column and row headers and their multiples as the table elements*/

var primeSet = require("../source/primeset.js"),
    arrayMultiply = require("../source/arraymultiply.js"),
    multipleTable = require("../source/createmultipletable.js"),
    primeTableDisplay = require("../source/primetabledisplay.js"),
    
n = 10;

if (n < 100000) {
    p = primeSet.primeSetBrute(n);
} else {
    p = primeSet.primeSetSieve(n);
}

m = arrayMultiply.arrayMultiply(p, p);

outputArray = multipleTable.createMultipleTable(p, p, m);

primeTableDisplay.primeTableDisplay(outputArray);
