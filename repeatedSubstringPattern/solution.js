const repeatedSubstringPattern = (s) => {
  let possibleSubstring;
  let multiple;

  for (let i = 1; i <= s.length / 2; i++) {
    possibleSubstring = s.slice(0, i);
    multiple = Math.floor(s.length / possibleSubstring.length);

    if (possibleSubstring.repeat(multiple) === s) {
      return true;
    }
  }

  return false;
};
