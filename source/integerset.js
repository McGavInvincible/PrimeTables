exports.integersFromTo = function(startn, endn) {

    //Returns a set of all integers from startn to endn of size (endn-startn)+1

    //Checks parameters are both integers
    if (typeof startn !== "number" || (startn%1) !== 0) {
	console.log("Please enter an integer");
	return 0;
    }

    if (typeof endn !== "number" || (endn%1) !== 0) {
	console.log("Please enter an integer");
	return 0;
    }

    //Checks parameters are in correct order
    if (startn > endn) {
	console.log("Starting number cannot be greater than ending number");
	return 0;
    }
    
    var intArray = [],
	intCounter = 0;

    //Pushes next integer onto array until next integer is greater than endn
    intArray[0] = startn;
    
    for (intCounter = startn+1; intCounter <= endn; intCounter++) {
	intArray.push(intCounter);
    }

    return intArray;

}
