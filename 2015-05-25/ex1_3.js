/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
*/

function draw(size, pattern) {
    for (var i = 0; i < size; i++) {
        var row = '';
        for (var j = 0; j < size; j++) {
            if (j % 2) {
                row += '#';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}

draw(8, '#');
