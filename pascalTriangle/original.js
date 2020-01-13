const generate = (numRows) => {
  let pascal = [[1]];

  if (numRows === 0) return [];

  for (let i = 0; i < numRows - 1; i++) {
    let next = [1];

    for (let j = pascal[i].length - 1; j > 0; j--) {
      next.push(pascal[i][j - 1] + pascal[i][j]);
    }
    next.push(1);
    pascal.push(next);
  }

  return pascal;
};
