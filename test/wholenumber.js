var expect = require("chai").expect;
var wholeNumber = require("../source/wholenumber.js");

describe("Whole Number Check", function() {
    it("checks if given number, n, is whole", function() {

	var zeroN = wholeNumber.isWholeNumber(0);
	var unitN = wholeNumber.isWholeNumber(1);
	var rationalN = wholeNumber.isWholeNumber(1.5);
	var largeN = wholeNumber.isWholeNumber(130000000);
	var negativeN = wholeNumber.isWholeNumber(-1);
	var wordN = wholeNumber.isWholeNumber("Word");

	expect(zeroN).to.equal(false);
	expect(unitN).to.equal(true);
	expect(rationalN).to.equal(false);
	expect(largeN).to.equal(true);
	expect(negativeN).to.equal(false);
	expect(wordN).to.equal(false);
	    
    });
});

