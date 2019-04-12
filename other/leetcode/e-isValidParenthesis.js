// Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

function isValid(s) {
  
  let store = []
  const storage = {"[": "]", "{": "}", "(": ")"}
  
  if (s.length % 2 !== 0) return false
  
  for (let i = 0; i < s.length; i++) {
    let bracket = s[i]
    // if true, we come across open and push that into store
    if (storage[bracket]) {
      store.push(bracket)
    } else {
      // if we first come across a right, string is invalid
      if (store.length === 0) return false

      // check for close then remove the matching open from store
      if (storage[store.pop()] !== bracket) return false
    }
  }
  
  // if store is empty -- string is valid
  return !store.length
}