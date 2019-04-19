const containsNearbyDuplicate = (nums, k) => {
  let storage = {}
  
  for (let i = 0; i < nums.length; i++) {
    // check if number is already in storage,
    // which can be equal to 0 (falsy)
    if (storage[nums[i]] !== undefined) {
      if (i - storage[nums[i]] <= k) {
        return true
      }
    }
    // save index of each number in the storage
    storage[nums[i]] = i
  }

  return false
}