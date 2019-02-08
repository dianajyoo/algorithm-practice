"https://leetcode.com/problems/single-number"

var singleNumber = function(nums) {
    let count = nums.reduce((storage, num) => {
      storage[num] = (storage[num] || 0) + 1
      if (storage[num] > 1) {
        delete storage[num]
      }
      return storage
    }, {})

    return Object.keys(count)
};
