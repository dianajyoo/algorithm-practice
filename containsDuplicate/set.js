const containsDuplicate = (nums) => {
  let setNums = new Set(nums);

  return [...setNums].length !== nums.length;
};
