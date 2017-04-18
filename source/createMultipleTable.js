#1;2802;0cexports.createMultipleTable = function(m, n, mnarray) {

    //Returns a 2-d array of with m as the column headers, n as the row headers and mnarray as the table

    var multipleTable = [],
	temporaryMatrix = [],
	arrayCounter = 0;

    //First element is always an empty space
    temporaryMatrix = [[]];
    
    //Create column headers from array ,
    for (arrayCounter = 0; arrayCounter < m.length; arrayCounter++) {

	temporaryMatrix.push(m[arrayCounter]);
    }

    //Create first row of table
    multipleTable.push(temporaryMatrix);

    for (arrayCounter = 0; arrayCounter < mnarray.length; arrayCounter++) {

	//Get row from mnarray
	temporaryMatrix = mnarray[arrayCounter].slice();

	//Add element from n for row header at beginning
	temporaryMatrix.unshift(n[arrayCounter]);

	//Create new row of table
	multipleTable.push(temporaryMatrix);

    }

    return multipleTable;

};
