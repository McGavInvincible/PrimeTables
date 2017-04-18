var expect = require("chai").expect;
var primeSet = require("../source/primeset.js");

describe("Prime Set Generator", function() {
    describe("Brute Force Method", function() {
	it("Generates a set of primes of size, n, by comparing to all previous primes", function() {

	    var oneP = primeSet.primeSetBrute(1);
	    var tenP = primeSet.primeSetBrute(10);
	    var zeroP = primeSet.primeSetBrute(0);
	    var nonintegerP = primeSet.primeSetBrute(1.5);
	    var wordP = primeSet.primeSetBrute("Primes please");
	
	    expect(oneP).to.deep.equal([2]);
	    expect(tenP).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
	    expect(zeroP).to.deep.equal(0);
	    expect(nonintegerP).to.deep.equal(0);
	    expect(wordP).to.deep.equal(0);

	});
    });
});

