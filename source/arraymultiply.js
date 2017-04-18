exports.arrayMultiply = function(m, n) {

    //Returns a 2-d array of the multiples of the elements of m and n
    var multiplyMatrix = [],
	temporaryMatrix = [],
	mcounter = 0,
	ncounter = 0;
    
    for (var mCounter = 0; mCounter < m.length; mCounter++) {

	temporaryMatrix = n.slice();

	for (var nCounter = 0; nCounter < temporaryMatrix.length; nCounter++) {
	    temporaryMatrix[nCounter] *= m[mCounter]
	}

	multiplyMatrix.push(temporaryMatrix);

    }

    return multiplyMatrix;

};
