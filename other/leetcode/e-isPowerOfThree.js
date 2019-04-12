// Given an integer, write a function to determine if it is a power of three.

// Examples:

// Input: 27
// Output: true

// Input: 0
// Output: false

// Input: 9
// Output: true

// Input: 45
// Output: false

var isPowerOfThree = function(n) {
    for (let i = 0; Math.pow(3, i) <= n; i++) {
      if (Math.pow(3, i) === n) {
        return true
      }
    }
    return false
};
