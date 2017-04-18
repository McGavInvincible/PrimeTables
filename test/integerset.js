var expect = require("chai").expect;
var integerSet = require("../source/integerset.js");

describe("Integer Array Generator", function() {
    it("Generates am array of integers from first given number to second", function() {

	var oneToTen = integerSet.integersFromTo(1,10);
	var minusToPlus = integerSet.integersFromTo(-2,2);
	var singleDigit = integerSet.integersFromTo(5,5);
	var wrongWay = integerSet.integersFromTo(10,1);
	var nonIntegerFirst = integerSet.integersFromTo(0.5,1);
	var nonIntegerSecond = integerSet.integersFromTo(1,1);
	var nonIntegerBoth = integerSet.integersFromTo(0.5,1.5);
	var wordFirst = integerSet.integersFromTo("Start",1);
	var wordSecond = integerSet.integersFromTo(1,"End");
	var wordBoth = integerSet.integersFromTo("Start","End");

	expect(oneToTen).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	expect(minusToPlus).to.deep.equal([-2, -1, 0, 1, 2]);
	expect(singleDigit).to.deep.equal([5]);
	expect(wrongWay).to.deep.equal(0);
	expect(nonIntegerFirst).to.deep.equal(0);
	expect(nonIntegerSecond).to.deep.equal(0);
	expect(nonIntegerBoth).to.deep.equal(0);
	expect(wordFirst).to.deep.equal(0);
	expect(wordSecond).to.deep.equal(0);
	expect(wordBoth).to.deep.equal(0);
	    
    });
});

