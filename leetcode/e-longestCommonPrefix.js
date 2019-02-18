// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: ["flower","flow","flight"]
// Output: "fl"

// runtime 140ms -- can be improved

// recursive soln
var longestCommonPrefix = function(strs) {
  let result = ""

  return checkPrefix(strs)

  function checkPrefix(words) {
    let prefix = [], newStrs, arr

    for (let i = 0; i < words.length; i++) {
      prefix.push(words[i][0])
    }

    if ([...new Set(prefix)].length === 1 && [...new Set(prefix)].join("")) {
      result += prefix[0]
      newStrs = words.map(word => {
        arr = word.split("")
        arr.shift()
        return arr.join("")
      })
      return checkPrefix(newStrs)
    } else {
      return result
    }
  }
};
