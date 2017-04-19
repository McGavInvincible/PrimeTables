var expect = require("chai").expect;
var maxTwoDimArray = require("../source/maxtwodimarray.js");

describe("Maximum Element Finder", function() {
    it("Finds the maximum element of a 2-d array", function() {

	var allnumbers = maxTwoDimArray.maxArray([[1, 2, 3],[2, 3, 4]]);
	var somenumbers = maxTwoDimArray.maxArray([[1, 6, "Word"],[5, [], 2]]);

	expect(allnumbers).to.equal(4);
	expect(somenumbers).to.equal(6);
		    
    });
});

