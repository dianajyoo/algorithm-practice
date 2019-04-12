const sumToZero = (N) => {
  let array

  // if N is even
  if (N % 2 === 0) {
    array = [-1,1]
  // if N is odd
  } else {
    array = [-1,1,0]
  }

  if (N === 2 || N === 3) {
    return array
  }

  for (let i = N; i <= 100; i++) {
    array.push(i)
    array.push(-i)

    let sum = array.reduce((total, n) => total + n)

    if (sum === 0 && array.length === N) {
      return array
    }
  }
}