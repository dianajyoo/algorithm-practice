const reverseString = (s) => {
  let left;

  for (let i = 0; i < s.length / 2; i++) {
    // save original leftside char before mutating array
    left = s[i];

    // swap first and last chars
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = left;
  }
};
