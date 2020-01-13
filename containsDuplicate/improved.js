const containsDuplicate = (nums) => {
  let set = new Set();

  for (const num of nums) {
    // O(1) lookup
    // if set contains num, then there is a duplicate
    if (set.has(num)) {
      return true;
    }
    // add each num to the set
    set.add(num);
  }

  return false;
};
