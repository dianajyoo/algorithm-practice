// iterative soln
var reverseString = function(s) {
    let copy = [...s]
    for (let i = 0; i < s.length; i++) {
      s[i] = copy[copy.length - (i + 1)]
    }
};

// recursive soln
const reverseString = (str) => {
   if (str.length <= 1) {
      return str
   } else {
      return reversedStr = reverseString(str.slice(1)) + str[0]
   }
}
