var expect = require("chai").expect;
var arrayMultiply = require("../source/arraymultiply.js");

describe("Multiple Table Generator", function() {
    it("Generates a 2d array of the multiples of 2 given arrays", function() {

	var arrayOne = arrayMultiply.arrayMultiply([1, 2, 3],[2, 3, 4]);

	expect(arrayOne).to.deep.equal([[2, 3, 4], [4, 6, 8], [6, 9, 12]]);
		    
    });
});

