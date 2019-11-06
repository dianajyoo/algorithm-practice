const findDisappearedNumbers = (nums) => {
  // create new array pre-filled with values from 1...nums.length + 1
  let int = [...Array(nums.length + 1).keys()].slice(1);
  
  for(let i = 0; i < nums.length; i++) {
    // each nums[i] index would be nums[i] - 1 if sorted
    let index = nums[i] - 1;
    
    // mark each int[index] as 0
    if(int[index] > 0) {
      int[index] = 0;
    }
  }
  
  // leftover integers in int are those unmarked 
  // so we return an array of values that are not 0
  return int.filter(i => i);  
};