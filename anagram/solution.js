const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  let count = {};
  // store in hash a count of each letter in string
  for (const char of s) {
    count[char] = count[char] + 1 || 1;
  }

  for (const char of t) {
    // if letter does not exist, then t is not an anagram of s
    if (count[char] === undefined) {
      return false;
    }

    // if letter does exist in s and t, then we subtract 
    // one from count
    count[char] -= 1;

    // if count in t does not match count in s,
    // then t is not anagram of s
    if (count[char] < 0) {
      return false;
    }
  }

  return true;
};
