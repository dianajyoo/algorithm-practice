// Given an array A of size N and an Integer X, prepare a solution that returns the index of X within A or -1 if not present. Optimize complexity.

// linear time O(n)
function linearComp(A, X) {
  for (let i = 0; i < A.length; i++) {
    if (A[i] === X) {
      return i
    }
  }
  return -1
}

// binary search using recursion O(log n)
function binarySearch(A, X) {
  A.sort( (a,b) => a - b )
  let min = 0, max = A.length - 1

  return recursion(min, max)

  function recursion(min, max) {
    let mid = Math.floor((min + max) / 2)

    if (max < min) {
      return -1
    }

    if (A[mid] === X) {
      return mid
    } else if (A[mid] < X) {
      min = mid + 1
      return recursion(min, max)
    } else {
      max = mid - 1
      return recursion(min, max)
    }
  }
}
