"https://leetcode.com/problems/valid-anagram"

var isAnagram = function(s, t) {
    let tArr = t.split(""), sArr = s.split("")

    if (s.length !== t.length) {
      return false
    }

    sArr.sort(), tArr.sort()

    if (sArr.join("") === tArr.join("")) {
      return true
    } else {
      return false
    }

// if you cannot use sort() --> but slower runtime:

var isAnagram = function(s, t) {
    let tArr = t.split(""), sArr = s.split("")

    if (s.length !== t.length) {
      return false
    }

    for (let i = 0; i < tArr.length; i++) {
      if (sArr.includes(tArr[i])) {
        sArr[sArr.indexOf(tArr[i])] = ""
      }
    }

    if (sArr.filter(char => char).length === 0) {
      return true
    } else {
      return false
    }
};
