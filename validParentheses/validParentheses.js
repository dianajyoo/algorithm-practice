const isValid = (s) => {
  // if length of s is odd, it is not a valid parentheses
  if (s.length % 2 !== 0) return false

  let storage = {"(": ")", "[": "]", "{": "}"}
  // stack => last one in, first one out
  let stack = []

  for (const p of s) {
    // if p is open parenthesis, then push into stack
    if (storage[p]) {
      stack.push(p)
    } else {
      // if p is close parenthesis, compare to last open in stack
      // if the pairs mismatch, it is not valid
      if (p !== storage[stack.pop()]) {
        return false
      }
    }
  }
  
  return !stack.length
}