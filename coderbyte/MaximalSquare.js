// Have the function MaximalSquare(strArr) take the strArr parameter being passed
// which will be a 2D matrix of 0 and 1's, and determine the area of the largest square
// submatrix that contains all 1's. A square submatrix is one of equal width and height,
// and your program should return the area of the largest submatrix that contains only 1's.
// For example: if strArr is ["10100", "10111", "11111", "10010"] then this looks like the following matrix:

// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0

// For the input above, you can see the bolded 1's create the largest square submatrix of size 2x2,
// so your program should return the area which is 4. You can assume the input will not be empty.

//*not complete

function checkArea(matrix) {
  let sum = 0;

  let newMatrix = matrix.map( (num) => {
    for (let i = 0; i < num.length; i++) {
      sum += Number(num[i], 10);
    }

    return sum;
  })

  return matrix.length * newMatrix[0];
}

function MaximalSquare(strArr) {

  let matrix = strArr.map(row => row.split(""));

  for (let row = 0; row < matrix.length - 1; row++) {
    for (let column = 0; column < matrix[0].length - 1; column++) {
      let subMatrix = matrix.slice(row, matrix.length + 1).map(rowArr => {
        return rowArr.slice(column, matrix[0].length + 1);
      })

      // console.log("/// ROW: ", row, "//", subMatrix, "///")

      if (subMatrix.length === subMatrix[0].length) {
        console.log("here")
        if (subMatrix.every( (arr) => arr.every( el => el === "1"))) {
          console.log('inside here')
          return checkArea(subMatrix);
        }
      }
    }
  }

  return 1;

}

// MaximalSquare(["10100", "10111", "11111", "10010"])
