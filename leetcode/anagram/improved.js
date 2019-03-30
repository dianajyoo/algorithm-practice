var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  let sCount = {},
      tCount = {}

  for (let i = 0; i < s.length; i++) {
    let tChar = t[i],
        sChar = s[i]
    // count number of times each char occurs
    tCount[tChar] = (tCount[tChar] || 0) + 1
    sCount[sChar] = (sCount[sChar] || 0) + 1
  }

  // decrease each char count in t with every iteration
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (!tCount[char]) return false
    tCount[char]--

    // if count is less than 0, t is not an angram of s
    if (tCount[char] < 0) {
      return false
    }
  }

  return true
};