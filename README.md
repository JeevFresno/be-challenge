SOLUTION

EXTERNAL Sort is the key to the challenge

    1. Divide the log sources in `n` log sources
    2. Sort and Store in the Secondary Memory 
    3. Read the files line by line and store the entries in Min-Heap
    4. Read the root value of the min-heap (smallest value)
    5. Write to the console.
    6. Continue from Step 3-5 till all the files are reached EOF
    
#Some stats:

![stats](/solution/stat1.png)
![stats](/solution/stat2.png)
![stats](/solution/stat3.png)
# Backend Challenge

Imagine you are given a set of log sources.  Each source is comprised of N log entries.  Each entry is a simple javascript object with a timestamp and message.  You don't know how many log entries each source has, BUT you do know that the entries within each source are sorted chronologically (that last bit is important).

Your mission is to print out all of the entries, across all of the sources, in chronological order.  You don't need to store the final collection of all the entries, literally just print them to console.  Some things to keep in mind:

* You don't know how long each log source is.  What if it had millions of entries and was terabytes in size?  (In other words, reading the entirety of a log source into memory probably won’t work well.)
* Some log sources could contain logs from last year, some from yesterday, you won't know the timeframe of a log source until you start looking.
* Consider what would happen when you're asked to merge 1K log sources, or even 1M log sources.  Where might your bottlenecks arise?

There are two parts of the challenge which you'll see when you get into things.  You can run everything with `npm start`.

Hope that sums it up.  You may use any third party modules you like, and by all means feel free to ask questions!

### Submission
Put your solution up on github and send us a link!
