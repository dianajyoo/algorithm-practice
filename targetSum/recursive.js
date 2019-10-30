const findTargetSumWays = (nums, S) => {
  let count = 0;
  
  const calculate = (num, sum, i) => {
    let add = addNum(num, sum);
    let subtract = subtractNum(num, sum);
      
    if(i === nums.length) {
      if(sum === S) {
        count += 1;
      }
    } else {
      i += 1;
      calculate(nums[i], add, i);
      calculate(nums[i], subtract, i);
    } 
  };
  
  calculate(nums[0], 0, 0);
  return count;
};

// helper functions
const addNum = (num, sum) => {
  sum += num;
  return sum;
};

const subtractNum = (num, sum) => {
  sum -= num;
  return sum;
};