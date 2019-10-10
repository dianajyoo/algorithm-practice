const reverseString = (s) => {
  for (let i=0; i < s.length / 2; i++) {
    // save original chars before mutating array
    let firstChar = s[i];
    let lastChar = s[s.length - 1 - i];

    // reverse first and last chars
    s[i] = lastChar;
    s[s.length - 1 - i] = firstChar;
  }
};