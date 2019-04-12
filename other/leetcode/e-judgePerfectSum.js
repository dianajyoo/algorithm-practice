// Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a^2 + b^2 = c.

// Example 1:
// Input: 5
// Output: True
// Explanation: 1 * 1 + 2 * 2 = 5

var judgeSquareSum = function(c) {
      let a = 0
      for (let b = 0; b <= Math.sqrt(c); b++) {
        a = Math.sqrt(c - Math.pow(b, 2))

        // a^2 + b^2 = c or a = sqrt(c - b^2) so a must be an integer
        if (Number.isInteger(a)) {
          return true
        }
      }
    return false
};
