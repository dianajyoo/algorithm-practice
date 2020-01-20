const reverseVowels = (s) => {
  s = s.split('');
  // store all vowels in a set to do a O(1) lookup
  const vowels = new Set(['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']);
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    // first case runs when leftside char finds a rightside char to swap
    // leftside and rightside behavior is not symmetrical so we use 2 pointers
    if (vowels.has(s[i]) && vowels.has(s[j])) {
      let temp = s[i];
      s[i] = s[j];
      s[j] = temp;

      i += 1;
      j -= 1;
    } else if (vowels.has(s[i])) {
      j -= 1;
    } else {
      i += 1;
    }
  }

  return s.join('');
};
