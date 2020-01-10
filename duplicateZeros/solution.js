const duplicateZeros = (arr) => {
  let int;

  for (let i = 0; i < arr.length; i++) {
    int = arr[i];

    if (int === 0) {
      // we insert 0 at position i but don't remove any integers
      arr.splice(i, 0, 0);
      // remove last integer to keep length of array constant
      arr.pop();
      // we skip the 0 we just added
      i += 1;
    }
  }
};
