var expect = require("chai").expect;
var integerSet = require("../source/integerset.js");

describe("Integer Array Generator", function() {
    it("Generates am array of integers from first given number to second", function() {

	var oneToTen = integerSet.integersFromTo(1,10);
	var minusToPlus = integerSet.integersFromTo(-2,2);
	var singleDigit = integerSet.integersFromTo(5,5);

	expect(oneToTen).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	expect(minusToPlus).to.deep.equal([-2, -1, 0, 1, 2]);
	expect(singleDigit).to.deep.equal([5]);
	    
    });
});

