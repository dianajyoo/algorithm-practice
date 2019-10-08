const twoSum = (nums, target) => {
  let storage = {};
  
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    let diff = target - n;

    // storage will have keys of num and values of num's index
    if (storage[diff] !== undefined) {
      return [storage[diff], i];
    } else {
      storage[n] = i;
    }
  }
  
};