// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum(nums, target) {
  if (nums.length === 2) return [0,1]
  
  let storage = {}
  
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i],
        diff = target - n

    // storage will have keys of num and values of num's index
    if (storage[diff] !== undefined) {
      return [storage[diff], i]
    } else {
      storage[n] = i
    }
  }
  
}