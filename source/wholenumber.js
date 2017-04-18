exports.isWholeNumber = function(n) {

    //Returns true when given number, n, is a whole number, false otherwise

    //Checks n is a number, greater than or equal to 1 and an integer
    if (typeof n !== "number" || n < 1 || (n%1) !== 0) {
	return false;
    } else {
	return true;
    }

};
