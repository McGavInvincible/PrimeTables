exports.primeTableDisplay = function(m) {

    //Displays array m with | between each element in each row
    
    var outString = "",
	rowCounter = 0,
	colCounter = 0,
	spaecCounter = 0,
	maxEntry = 0,
	maxLength = 0,
	minTableSpace = 0;

    //Smallest spacing for elements of array
    minTableSpace = 4;

    //Assumes longest element is the last element of last row
    maxEntry = m[m.length-1][m[m.length-1].length-1];
    maxLength = maxEntry.toString().length;

    if (maxLength < minTableSpace) {maxLength = minTableSpace}
    
    for (rowCounter = 0; rowCounter < m.length; rowCounter++) {
	
	outString = "|";
	
	for (colCounter = 0; colCounter < m[rowCounter].length; colCounter++) {

	    //Fills in empty space such that all elements of table are equally spaced
	    for (spaceCounter = 0; spaceCounter < maxLength-m[i][j].toString().length; spaceCounter++) {
		outString = outString.concat(" ");
	    }
	    
	    outString = outString.concat(" ",m[rowCounter][colCounter], " |")
	    
	}
	
	console.log(outString);
    }
}
