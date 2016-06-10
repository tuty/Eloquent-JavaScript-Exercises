/**
 * Chess board
 Write a program that creates a string that represents an 8×8 grid, using
 newline characters to separate lines. At each position of the grid there
 is either a space or a “#” character. The characters should form a chess
 board.
 Passing this string to console.log should show something like this:
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
 */

(function () {
    var size = 8;

    drawBoard(size);

    function drawBoard(size) {
        var str = '';
        var patternEven = ' ';
        var patternOdd = '#';

        for(var i = 0; i < size * size; i += 1) {
            if (i % 8 == 0 && i != 0) {
                str += '\n';
                patternEven = patternEven == ' ' ? '#' : ' ';
                patternOdd = patternOdd == ' ' ? '#' : ' ';
            }

            if (i % 2 == 0) {
                str += patternEven;
            } else {
                str += patternOdd;
            }
        }

        console.log(str);
    }
})();
