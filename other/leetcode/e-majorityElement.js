// Given an array of size n, find the majority element. The majority element is the element
// that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:
// Input: [3,2,3]
// Output: 3

var majorityElement = function(nums) {
  let storage = {}

  nums.forEach(n => {
    storage[n] = (storage[n] || 0) + 1
  })

  for (const k in storage) {
    if (storage[k] > nums.length / 2) {
      return k
    }
  }
};
