exports.primeUpperBound = function(n) {

    //Returns upper bound for value of nth prime

    var primeUpper = 0;

    switch (n) {
	
    case 1:
	primeUpper = 2;
	break;

    case 2:
	primeUpper = 3;
	break;

    case 3:
	primeUpper = 5;
	break;

    default:
	
	primeUpper = n * (Math.log(n) + Math.log(Math.log(n)));

	//Setting bound to a whole number
	primeUpper = Math.ceil(primeUpper);

    }
    
    return primeUpper;
    
};
