/*Takes in a whole number, n, from the user, generates a set of primes of size n and then displays a table
  of the prime sets as column and row headers and their multiples as the table elements*/

var primeTableDisplay = require("../source/primetabledisplay.js"),
    wholeNumber = require("../source/wholenumber.js"),
    inquirer = require("inquirer"),
    primeTableGenerator = require("../source/primetablegenerator.js");

var userNumber = 0,
    outputArray = [];

var getNumber = {
    type: 'input',
    name: 'wholeN',
    message: 'Please enter a whole number: (or "quit" to stop)',
}

function main() {

    inquirer.prompt(getNumber).then( function (answers) {

	userNumber = parseInt(answers.wholeN);

	if (wholeNumber.isWholeNumber(userNumber) === true) {
	    outputArray = primeTableGenerator.primeTableGenerator(userNumber);
	    primeTableDisplay.primeTableDisplay(outputArray);
	    main();
	} else if (answers.wholeN !== "quit") {
	    main();
	}

    })
	
}				   

main()
