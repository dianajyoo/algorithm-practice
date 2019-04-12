const findOdd = (array) => {
  let storage = {}
  let currentEl

  // store a count of each el 
  for (let i = 0; i < array.length; i++) {
    currentEl = array[i]
    storage[currentEl] = (storage[currentEl] || 0) + 1
  }

  // iterate through storage to find which el occurs an odd number of times
  for (const el in storage) {
    if (storage[el] % 2 !== 0) {
      return Number(el)
    }
  }

  return "No integer occurs an odd number of times!"
}