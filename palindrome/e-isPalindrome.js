var isPalindrome = function(s) {
    s = s.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~'\s]/g,"")
    s = s.toLowerCase()

    for (let i = 0; i <= Math.ceil(s.length/2); i++) {
      if (s[i] !== s[s.length - (i + 1)]) {
        return false 
      }
    }
  return true
};
