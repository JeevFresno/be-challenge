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
var sortArrays=[];

//You can adjust the number of merges/partition
var maxTempFiles=2;
module.exports = (logSources, printer) => {


    console.log("Chunk size = "+ chunkEstimation(logSources))
    console.log('Maximum Files Allowed = '+maxTempFiles)
    var chunkSize = chunkEstimation(logSources)

    //dividing array in parts, and merge. External sort
    while(logSources.length){
        sortArrays.push(logSources.splice(0,chunkSize));
    }

    sortAllArrays(sortArrays) //sorting all arrays
    merge(sortAllArrays(sortArrays), chronologicalDateSorting,printer); //passing the sorted arrays to merge

    printer.done()  //printing to see the stats
}

// Merge an array or pre-sorted arrays, based on the given sort criteria.
function merge(arrays, sortFunc, printer) {
    let next;

    // Add an 'index' property to each array, so that we can keep track which to choose
    arrays.forEach(array => array.index = 0);

   //fund the next smallest element, here sorting those values and picking the smallest one
    function findNext() {
        return arrays.filter(array => array.index < array.length)
            .sort((a, b) => sortFunc(a[a.index], b[b.index]))[0];
    }

   //loop till you merge two and keep printing it
    while (next = findNext())
        printer.print(next[next.index++].last)

}

//Date sorting function
function chronologicalDateSorting(a, b) { return a.last.date - b.last.date; }

//function to Sort all chunks and mergeing later
function sortAllArrays(result){

    for(var i=0;i<result.length;i++){
        result[i].sort(function(a,b){
            return a.last.date - b.last.date;
        });
    }
    return result;
}

//function to find out the size of each chunk and split. And merge those all chunks later
function chunkEstimation(logSources){

    //MaxTempfiles can be changed, as we can check with `n` Log Sources


    var length=logSources.length;
    var chunkSize = length/maxTempFiles;


    return chunkSize;
}