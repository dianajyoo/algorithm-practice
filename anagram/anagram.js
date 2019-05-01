const isAnagram = (s, t) => {
  if (s.length !== t.length) return false 

  for (const c of s) {
    t = t.replace(c, "")
  }
  
  return t.length === 0
};