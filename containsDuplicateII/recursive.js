const containsNearbyDuplicate = (nums, k) => {
  let store = []
  let index
  
  for (let i = 0; i < nums.length; i++) {
      // grab index of each number in nums array
      index = store.indexOf(nums[i])
    
      // if a duplicate number is found, then check the difference
      // between its index and current index of number
      if (index !== -1) {
        if (i - index <= k) {
          return true
        } else {
          // if difference is larger than k,
          // then remove the first duplicate number
          // do a recursion
          nums.splice(index, 1) 
          return containsNearbyDuplicate(nums, k)
        }
      }
      store.push(nums[i])
  }

  return false
}