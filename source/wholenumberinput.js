exports.wholeNumberInput = function() {

    //Asks user to enter a whole number and returns it

    //var userWholeNumber;
    const readline = require('readline');

    const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
    });

    rl.question('Please enter a whole number: ', (answer) => {

	console.log(answer);
	
	rl.close();
	
    });
   
};
