const isAnagram = (s, t) => {
  if (s.length !== t.length) return false

  let sCount = {}
  let tCount = {}

  for (let i = 0; i < s.length; i++) {
    let tChar = t[i]
    let sChar = s[i]
    
    // count number of times each char occurs
    tCount[tChar] = (tCount[tChar] || 0) + 1
    sCount[sChar] = (sCount[sChar] || 0) + 1
  }

  for (const k in sCount) {
    if (sCount[k] !== tCount[k]) {
      return false
    }
  }

  return true
}