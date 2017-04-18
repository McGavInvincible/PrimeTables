exports.wholeNumberInput = function() {

    var userPrompt = require("../source/userprompt.js");
    
    userPrompt.prompt('Whats your name?', function (input) {
	console.log(input);
	process.exit();
    });

    return input;
    
}
