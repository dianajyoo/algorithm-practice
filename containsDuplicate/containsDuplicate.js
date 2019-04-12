var containsDuplicate = function(nums) {
    if ([...new Set(nums)].length !== nums.length) {
      return true
    } else {
      return false
    }
};
