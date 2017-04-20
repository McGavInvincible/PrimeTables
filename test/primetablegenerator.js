var expect = require("chai").expect;
var primeTableGenerator = require("../source/primetablegenerator.js");

describe("Multiple Table Generator", function() {
    it("Generates a 2d array with row and column headers and a table within", function() {

	var primeTable = primeTableGenerator.primeTableGenerator(3);

	expect(primeTable).to.deep.equal([[[], 2, 3, 5],[2, 4, 6, 10], [3, 6, 9, 15], [5, 10, 15, 25]]);
		    
    });
});

