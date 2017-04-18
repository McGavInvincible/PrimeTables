var expect = require("chai").expect;
var multipleTable = require("../source/createMultipleTable.js");

describe("Multiple Table Generator", function() {
    it("Generates a 2d array with row and column headers and a table within", function() {

	var tabkeOne = arrayMultiply.arrayMultiply([1, 2, 3],[2, 3, 4],[[2, 3, 4], [4, 6, 8], [6, 9, 12]]);

	expect(tableOne).to.deep.equal([[[], 1, 2, 3],[2, 2, 3, 4], [3, 4, 6, 8], [4, 6, 9, 12]]);
		    
    });
});

