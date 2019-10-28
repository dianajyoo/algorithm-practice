const longestPalindrome = (s) => {
  s = s.split('');
  let count = {};
  let oddCount = 0;
  let result = 0;
  
  // keep count of each char occurrences in a hash map
  s.forEach((char) => {
    count[char] = count[char] + 1 || 1;
  });
 
  for(const char in count) {
    // add all even occurring chars to the result length
    if(count[char] >= 2 && count[char] % 2 === 0) {
      result += count[char];
    }
    // if there are multiple chars occurring odd number of times, min of 3,
    // keep the greater odd number of occurrences 
    // and subtract one from all other odd number of occurrences
    // to make them even
    if(count[char] >= 3 && count[char] % 2 !== 0) {
      if(!oddCount) {
        oddCount = 1;
        result += count[char];
      } else {
        result += count[char] - 1;
      }
    }
  };

  // if there were no chars occurring an odd number of times greater than 1, 
  // then check if there are chars occurring 1x by subtracting result from original length
  // and add 1 to the final result 
  return !oddCount && s.length - result >= 1 ? result + 1 : result;  
};