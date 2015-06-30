/**
   “takes an array as argument and produces a new array that has the same elements in the inverse order. ”
   Avoid using native reverse method.
*/
function reverseArray(arr) {
    var result = [];
    if (!check(arr)) {
        return [];
    }
    var i = arr.length - 1;
    while(i >= 0) {
        result.push(arr[i]);
        i--;
    }
    return result;
}


/**
   Implement the native reverse method of Array.
   Do not produce a new Array.
*/

function reverseArrayInPlace(arr) {
    if (!check(arr)) {
        return arr;
    }
    var size = arr.length;
    var tmp;
    for (var i = 0, j = Math.floor(size / 2); i < j; i++) {
        tmp = arr[i];
        arr[i] = arr[size - 1 - i];
        arr[size - 1 - i] = tmp;
    }
    return arr;
}


function check(arr) {
    if (typeof arr === 'undefined') {
        return false;
    }
    var type = Object.prototype.toString.call(arr);
    if (type !== '[object Array]') {
        return false;
    }
    if (arr.length <= 0) {
        return false;
    }
    return true;
}

var arr = [1,2,3,4,5];
var arr2 = reverseArrayInPlace(arr);
console.log(arr2);
console.log(arr2 === arr);

var array = [1,2,3,4,5,6];
var array2 = reverseArrayInPlace(array);
console.log(array2);
console.log(array2 === array);
