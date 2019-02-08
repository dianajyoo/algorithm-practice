"https://leetcode.com/problems/two-sum"

var twoSum = function(nums, target) {
    let results, copy = [...nums]

    if (nums[0] + nums[1] === target) {
      return [0, 1]
    }

    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < copy.length; j++) {
        if (nums[i] + copy[j] === target) {
          results = [i, j]
          return results
        }
      }
    }
};
