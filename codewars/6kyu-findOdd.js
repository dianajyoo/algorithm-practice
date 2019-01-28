// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {

  let count = 1;
  A.sort( (a,b) => a - b );

  if (A.length === 1) {
    return A[0];
  } else if (A[0] !== A[1]) {
    return A[0];
  } else {
    for (let i = 0; i < A.length - 1; i++) {
      if (A[i] === A[i + 1]) {
        count++;
        // odd num of count will return true
        if (count % 2 === 1) {
          if (A[i + 1] !== A[i + 2]) {
            return A[i + 1];
          }
        }
      } else {
        count = 1;
        if (A[i + 1] !== A[i + 2]) {
          return A[i + 1];
        }
      }
    }
  }

  return 0;
}
