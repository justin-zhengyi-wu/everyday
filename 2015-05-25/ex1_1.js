/*
Write a loop that makes seven calls to console.log to output the following triangle.

#
##
###
####
#####
######
#######

*/

var triangle = '#';
for (var i = 1; i <= 7; i++) {
    var str = '', j = i;
    while (j) {
        str += triangle;
        j--;
    }
    console.log(str);
}
