var expect = require("chai").expect;
var primeBound = require("../source/primebound.js");

describe("Prime Bound", function() {
    it("Returns upper bound for nth prime", function() {

	var upperTen = primeBound.primeUpperBound(10);
	var upperHundred = primeBound.primeUpperBound(100);
	var upperThousand = primeBound.primeUpperBound(1000);

	expect(upperTen).to.equal(32);
	expect(upperHundred).to.equal(614);
	expect(upperThousand).to.equal(8841);
	
    });
});

