// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of
// characters. No two characters may map to the same character but a character may map to itself.

// Example 1:
// Input: s = "egg", t = "add"
// Output: true

// Example 2:
// Input: s = "foo", t = "bar"
// Output: false

// Example 3:
// Input: s = "paper", t = "title"
// Output: true

var isIsomorphic = function(s, t) {
  let storage = {}, result = ""

  for (let i = 0; i < s.length; i++) {
    // checks for duplicate letters in s
    if (storage[s[i]]) {
      result += storage[s[i]]
    } else {
      storage[s[i]] = t[i]
      if (storage[s[i - 1]] !== t[i]) {
        storage[s[i]] = t[i] 
        result += t[i]
      } else {
        // if two different letters in s map to same letter,
        // return false
        return false
      }
    }
  }
  return result === t
};