/*
  “Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.”
  “Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.”

*/

function countBs(str) {
    countBs(str, 'B');
}



function countChar(str, character) {
    str = String(str);
    character = String(character);
    var n = 0;
    var i = 0;
    while (i < str.length) {
        if (str[i] === character) {
            n++;
        }
        i++;
    }
    return n;
}
