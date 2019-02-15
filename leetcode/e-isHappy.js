// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer,
// replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1
// (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers.

// Example:

// Input: 19
// Output: true
// Explanation:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

var isHappy = function(n) {
    return recursion(n)

    function recursion(num) {
      if (num === 1) return true

      let powers = String(num).split("").map(i => Number(i) * Number(i)),
          sum = powers.reduce((total, i) => total += i)

      if (sum === 1) {
        return true
      } else if (sum === 145) {
        return false
      } else {
        return recursion(sum)
      }
    }
};
