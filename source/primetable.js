/*Takes in a whole number, n, from the user, generates a set of primes of size n and then displays a table
  of the prime sets as column and row headers and their multiples as the table elements*/

var primeSet = require("../source/primeset.js"),
    arrayMultiply = require("../source/arraymultiply.js"),
    multipleTable = require("../source/createmultipletable.js"),
    primeTableDisplay = require("../source/primetabledisplay.js"),
    wholeNumber = require("../source/wholenumber.js"),
    inquirer = require("inquirer");

var userNumber = 0,
    primes = [],
    multiTable = [],
    outputArray = [];

var question = {
    type: 'input',
    name: 'wholeN',
    message: 'Please enter a whole number: ',
}

function main() {

    inquirer.prompt(question).then( function (answers) {

	userNumber = parseInt(answers.wholeN);

	if (wholeNumber.isWholeNumber(userNumber) === true) {
	    primeTable(userNumber)
	} else {
	    main()
	}
	
    })
}

function primeTable(n) {

    if (n < 100000) {
	primes = primeSet.primeSetBrute(n);
    } else {
	primes = primeSet.primeSetSieve(n);
    }

    multiTable = arrayMultiply.arrayMultiply(primes, primes);

    outputArray = multipleTable.createMultipleTable(primes, primes, multiTable);

    primeTableDisplay.primeTableDisplay(outputArray);

}

main()
