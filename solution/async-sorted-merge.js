/*
	Function to merge `n` log sources Chronologically.
	Solution to the problem: External sorting
		1. In this case (Coding challenge), Divide the log source, sort it, merge
		2. Ideally store all the chunks of the huge in secondary memory
		3. Read One line from the all the `n` log sources and keep pushing in the Min-Heap
		4. Retrieve the root value from the heap
		5. Print on console.
		6. Continue from step 3-5 till all the files are reached EOF ( end of file )

	For this Coding challenged i performed the following steps.
		1. Divided the log sources into `n` log sources
		2. Sorted all the log sources
		3. Merged all sorted arrays chronologically
		4. Printed on by one

		The code consist of following functions
		Merge:                      merging of the all sorted arrays
       chronologicalDateSorting:    Sorting dates chronologically
       sortAll Arrays:              Sorting all chunks to be merged later
       chunkEstimation:             To divided
 */

'use strict'
var sortArrays = [];
module.exports = (logSources, printer) => {
    //throw new Error('Not implemented yet!  That part is up to you!')

    console.log(chunkEstimation(logSources));
    var tempFiles = chunkEstimation(logSources)

    while(logSources.length){
        sortArrays.push(logSources.splice(0,tempFiles));
    }

    //merging all the arrays
    merge(sortAllArrays(sortArrays), chronologicalDateSorting,printer);
    printer.done()

}


// Merge an array or pre-sorted arrays, based on the given sort criteria.
function merge(arrays, sortFunc, printer) {
    let next;

    // Add an 'index' property to each array to keep track of where we are in it.
    arrays.forEach(array => array.index = 0);

   //find the next smallest
    function findNext() {
        return arrays.filter(array => array.index < array.length)
            .sort((a, b) => sortFunc(a[a.index], b[b.index]))[0];
    }

    //loop till you merge two and keep printing it
    while (next = findNext())
        printer.print(next[next.index++].last)

}

function chronologicalDateSorting(a, b) { return a.last.date - b.last.date; }


function sortAllArrays(result){

    for(var i=0;i<result.length;i++){
        result[i].sort(function(a,b){
            return a.last.date - b.last.date;
        });
    }
    return result;
}

//function to find out the size of each block
function chunkEstimation(logSources){

    var maxTempFiles=2; //this can be adjusted
    var length=logSources.length;
    var chunkSize = length/maxTempFiles;

    return chunkSize;
}
