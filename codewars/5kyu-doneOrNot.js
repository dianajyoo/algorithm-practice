"https://www.codewars.com/kata/did-i-finish-my-sudoku/javascript"

function doneOrNot(board) {
  let r = 0, c = 0;

  for (let i = 0; i < 9; i++) {
    let colSum = 0, rowSum = 0;

    for (let j = 0; j < 9; j++) {
      colSum += board[j][i];
      rowSum += board[i][j];

      // check for duplicates in each 3x3 square
      while (r <= 6 || c <= 6) {
        var subMatrix = board.slice(r, r + 3).map(row => row.slice(c, c + 3));

        if ([...new Set([].concat.apply([], subMatrix))].length < 9) {
          return "Try again!";
        }

        c += 3;
        r += 3;
      }

      // check that there are no duplicates in each row, col
      if ([...new Set(board[j])].length < 9 || [...new Set(board[i])].length < 9) {
        return "Try again!";
      }
    }

    // check that each sum of row, col is equal to 45
    if (colSum !== 45 || rowSum !== 45) {
      return "Try again!";
    }
  }

  return "Finished!";
}
