const isPalindrome = (s) => {
  s = s.replace(/\W/g, '').toLowerCase();

  for (let i = 0; i < s.length / 2; i++) {
    let firstChar = s[i];
    let lastChar = s[s.length - i - 1];

    if (firstChar !== lastChar) {
      return false;
    }
  }

  return true;
};
