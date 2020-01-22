const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor((right + left) / 2);
  
  while (left <= right) {
    if (nums[mid] === target) {
      return mid;
    }
    
    if (nums[mid] > target) {
      right = mid - 1;
    }
    
    if (nums[mid] < target) {
      left = mid + 1;
    }
    
    mid = Math.floor((right + left) / 2);
  }
  
  return -1;
};