const largeGroupPositions = (S) => {
  // we start count at 1 to include the first char as first group
  let count = 1;
  let result = [];

  // S.length + 1 to handle edge case "aaa" where
  // else case wouldn't run otherwise
  for (let i = 1; i < S.length + 1; i++) {
    // if previous char and next char is equal,
    // we increment count
    if (S[i - 1] === S[i]) {
      count += 1;
    } else {
      if (count >= 3) {
        result.push([i - count, i - 1]);
      }

      count = 1;
    }
  }

  return result;
};
