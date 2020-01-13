const searchInsert = (nums, target) => {
  // if target is the largest num, then it would be inserted at the end of the list
  if (nums[nums.length - 1] < target) return nums.length;

  // otherwise, we find position of target among the numbers
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
};
