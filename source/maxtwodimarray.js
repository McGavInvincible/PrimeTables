exports.maxArray = function(m) {

    //Returns the maximum element of a 2-d array

    var maxElement = 0,
	rowCounter = 0,
	colCounter = 0;

    maxElement = -Infinity;

    for (rowCounter = 0; rowCounter < m.length; rowCounter++) {

	for (colCounter = 0; colCounter < m[rowCounter].length; colCounter++) {

	    if (m[rowCounter][colCounter] > maxElement) {maxElement = m[rowCounter][colCounter]}

	}

    }

    return maxElement;
    
};
