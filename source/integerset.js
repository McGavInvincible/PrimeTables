exports.integersFromTo = function(startn, endn) {

    //Returns a set of all integers from startn to endn of size (endn-startn)+1

    var intArray = [],
	intCounter = 0;
    
    intArray[0] = startn;
    
    for (intCounter = startn+1; intCounter <= endn; intCounter++) {
	intArray.push(intCounter);
    }

    return intArray;

}
