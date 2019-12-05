const majorityElement = (nums) => {
  let hash = {};
  
  for(const num of nums) {
    hash[num] = hash[num] + 1 || 1;
    
    if(hash[num] > nums.length / 2) {
      return num;
    }
  }
};