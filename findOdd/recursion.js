const findOdd = (array) => {
  let count = 0
  let store = []
  let currentEl = array[0]

  for (let i = 0; i < array.length; i++) {
    if (array[i] === currentEl) {
      count++
    } else {
      store.push(array[i])
    }
  }

  // check if count is odd or not
  if (count % 2 !== 0) {
    return currentEl
  } else {
    // run the function again with new array if count is even
    return findOdd(store)
  }
}