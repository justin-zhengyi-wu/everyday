/**
   “Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

   Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.”


   “As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].”

*/

function range(start, end) {
    var results = [];
    while (start <= end) {
        results.push(start++);
    }
    return results;
}

function sum(arr) {
    var result = 0;
    arr.forEach(function(item) {
        result += item;
    });
    return result;
}

console.log(sum(range(1, 10)));


function range2(start, end, step) {
    step = step || 1;
    if ((end >= start && step < 0) || (end <= start && step > 0)) {
        console.log('Invalid arguments.');
        return;
    }
    var results = [];
    var from, to;
    if (step > 0) {
        from = start;
        to = end;
    } else {
        from = end;
        to = start;
    }
    while (from <= to) {
        results.push(from);
        from += Math.abs(step);
    }
    if (step < 0) {
        results.reverse();
    }
    return results;
}

console.log(range2(1, 10, 2));
console.log(range2(5, 2, -1));
