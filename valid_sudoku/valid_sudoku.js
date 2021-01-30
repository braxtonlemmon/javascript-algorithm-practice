/* 
GIVEN:
  board: []string[] ... array of 9 arrays, each inner array has 9 elements

RETURN:
  isValid: boolean ... true if board meets conditions, false otherwise

CONSTRAINTS:
  board.length === 9
  board[i].length === 9
  bord[i][j] is (string) digit or '.'


EXAMPLE
board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

return: true, because no repeats in column, row, or square
***********************************************
board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

return: false, because repeated 8 in column 1

THINKING:
  brute force: check each row, col, square
  later look at repeating actions, optimize

  row hashtable, col hashtable, square hashtable
  row {
    1: 1
    3: 1
    8: 1
  }

  columns = [{}, {}, {}]
  columns[j]

  col0 {
    1: 1
    4: 1
  } ... col8

  sq0 {

  }
  iterate over board
  for each row (board[i]) tally instances of digits
  if an instance > 1, end completely and return false

  each el is part of a row, col, square
  board[i][j] is an el
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

[0,1,2,3,4,5,6,7,8]0
[0,1,2,3,4,5,6,7,8]1
[0,1,2,3,4,5,6,7,8]2
[0,1,2,3,4,5,6,7,8]3
[0,1,2,3,4,5,6,7,8]4
[0,1,2,3,4,5,6,7,8]5
[0,1,2,3,4,5,6,7,8]6
[0,1,2,3,4,5,6,7,8]7
[0,1,2,3,4,5,6,7,8]8
*/
// [board[0][0], board[0][1], board[0][2]]
// [board[1][0], board[1][1], board[1][2]]
// [board[2][0], board[2][1], board[2][2]]
function isValidSudoku(board) {
  let colTally = [{},{},{},{},{},{},{},{},{}];
  let boxTally = [{},{},{},{},{},{},{},{},{}];

  // first loop, row by row; i represent row
  for (let row = 0; row < board.length; row++) {
    let rowTally = {};
    // second loop, el by el of row; j represents col
    for (let col = 0; col < board[row].length; col++) {
      let current = board[row][col];
      let box = (Math.trunc(row / 3) * 3) + Math.trunc(col / 3);

      if (current !== '.') {
        // updating and checking rowTally
        if (rowTally[current]) {
          return false;
        } else {
          rowTally[current] = 1;
        }

        // updating and checking colTally
        if (colTally[col][current]) {
          return false;
        } else {
          colTally[col][current] = 1;
        }

        // updating and checking boxTally
        if (boxTally[box][current]) {
          return false;
        } else {
          boxTally[box][current] = 1;
        }
      }
    }
  }
  return true;
}

module.exports = isValidSudoku;