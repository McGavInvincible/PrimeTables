/*Takes in a whole number, n, from the user, generates a set of primes of size n and then displays a table
  of the prime sets as column and row headers and their multiples as the table elements*/

var primeSet = require("../source/primeset.js"),
    arrayMultiply = require("../source/arraymultiply.js"),
    multipleTable = require("../source/createmultipletable.js"),
    primeTableDisplay = require("../source/primetabledisplay.js"),
    inquirer = require("inquirer");

var userNumber = 0,
    primes = [],
    multiTable = [],
    outputArray = [];

var question = {
    type: 'input',
    name: 'wholeN',
    message: 'Please enter a whole number: ',
    default: 3
}

inquirer.prompt(question).then( function (answers) {
    console.log(answers);
})

userNumber = 10;

if (userNumber < 100000) {
    primes = primeSet.primeSetBrute(userNumber);
} else {
    primes = primeSet.primeSetSieve(userNumber);
}

multiTable = arrayMultiply.arrayMultiply(primes, primes);

outputArray = multipleTable.createMultipleTable(primes, primes, multiTable);

primeTableDisplay.primeTableDisplay(outputArray);
