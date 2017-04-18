var expect = require("chai").expect;
var primeBound = require("../source/primebound.js");

describe("Prime Bound", function() {
    it("Returns upper bound for nth prime", function() {

	var upperTen = primeBound.primeUpperBound(10);
	var upperHundred = primeBound.primeUpperBound(100);
	var upperThousand = primeBound.primeUpperBound(1000);
	var upperOne = primeBound.primeUpperBound(1);
	var upperTwo = primeBound.primeUpperBound(2);
	var upperThree = primeBound.primeUpperBound(3);
	var upperFour = primeBound.primeUpperBound(4);
	var upperFive = primeBound.primeUpperBound(5);
	
	expect(upperTen).to.equal(32);
	expect(upperHundred).to.equal(614);
	expect(upperThousand).to.equal(8841);
	expect(upperOne).to.equal(2);
	expect(upperTwo).to.equal(3);
	expect(upperThree).to.equal(5);
	expect(upperFour).to.equal(7);
	expect(upperFive).to.equal(11);
	
    });
});

