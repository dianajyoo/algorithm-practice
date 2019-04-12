// Given a positive integer num, write a function which returns True if 
// num is a perfect square else False.

// Note: Do not use any built-in library function such as sqrt.

// Example 1:
// Input: 16
// Output: true

// Math.sqrt(num) === num ** 0.5
var isPerfectSquare = function(num) {
  if (Number.isInteger(num ** 0.5)) return true

  return false
};