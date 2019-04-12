// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

var topKFrequent = function(nums, k) {
    let counts = {}

    for (let i = 0; i < nums.length; i++) {
      counts[nums[i]] = (counts[nums[i]] || 0) + 1
    }

    let keys = Object.keys(counts)
    keys.sort((a,b) => counts[b] - counts[a])

    return keys.slice(0, k)
};
