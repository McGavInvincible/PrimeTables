exports.primeUpperBound = function(n) {

    //Returns upper bound for value of nth prime

    var primeUpper = [];

    primeUpper = n * (Math.log(n) + Math.log(Math.log(n)));

    //Setting bound to a whole number
    primeUpper = Math.ceil(primeUpper);

    return primeUpper;
    
};
