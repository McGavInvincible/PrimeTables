exports.primeTableDisplay = function(m) {

    //Displays array m with | between each element in each row
    
    var outString = "",
	rowCounter = 0,
	colCounter = 0;
    
    for (rowCounter = 0; rowCounter < m.length; rowCounter++) {
	
	outString = "|";
	
	for (colCounter = 0; colCounter < m[rowCounter].length; colCounter++) {

	    outString = outString.concat(" ",m[rowCounter][colCounter], " |")
	    
	}
	
	console.log(outString);
    }
}
