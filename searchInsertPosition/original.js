const searchInsert = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i
    }
  }
  // if target is greater than each nums[i], then 
  // target is placed at the end of the array
  // which has an index of nums.length
  return nums.length
}