const generate = function(numRows) {
    let pascal = [[1], [1,1]]

    if (numRows < 1) {
      return []
    } else if (numRows === 1) {
      return [[1]]
    }

    for (let i = 2; i < numRows; i++) {
      pascal.push([1])
      for (let j = 0; j < pascal[i - 1].length - 1; j++) {
        pascal[i].push(pascal[i - 1][j] + pascal[i - 1][j + 1])
      }
      pascal[i].push(1)
    }
    return pascal
};
