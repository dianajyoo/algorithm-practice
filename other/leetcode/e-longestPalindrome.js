// Given a string which consists of lowercase or uppercase letters, find 
// the length of the longest palindromes that can be built with those letters.

// This is case sensitive, for example "Aa" is not considered a
// palindrome here.

// Note:
// Assume the length of given string will not exceed 1,010.

// Example:
// Input:
// "abccccdd"
// Output:
// 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

var longestPalindrome = function(s) {
  let storage = {}, sArr = s.split(""), sum = 0, countOne = 0
  
  // keep count of all letters
  for (let i = 0; i < s.length; i++) {
    storage[sArr[i]] = (storage[sArr[i]] || 0) + 1
  }

  // loop over storage to find how many pairs exist
  // subtract pairs (2) from count and add to sum
  for (const k in storage) {
    while (storage[k] >= 2) {
      storage[k] -= 2
      sum += 2
    }

    // if remaining count is 1, add that to final sum
    if (storage[k] === 1) {
      countOne = 1
    }
  }
  return sum + countOne
};