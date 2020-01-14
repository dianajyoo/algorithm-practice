const findMaxConsecutiveOnes = (nums) => {
  // temp will be dynamic and store current count of 
  // consecutive 1's
  let temp = 0;
  // count stores the current max of consecutive 1's
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      temp += 1;
    }

    if (nums[i] === 0) {
      // we replace count with temp if we find a larger
      // number of consecutive 1's
      if (temp > count) {
        count = temp;
      }

      // reset temp to 0 so we can count next set of consecutive 1's
      temp = 0;
    }
  }

  // handles edge cases like [0,1] or [0,0,1,1]
  // if temp is greater than count, we should return temp instead
  return temp > count ? temp : count;
};
