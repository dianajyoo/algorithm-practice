let result = [[1], [1,1]]

const pascalTriangle = (numRows) => {
  let lastRow = result[result.length - 1]
  let newRow = [1]
  let nextNum

  // edge cases when numRows = 0, 1, or 2
  if (numRows < 1) {
    return []
  } else if (numRows === 1) {
    return [[1]]
  } else if (numRows === 2) {
    return result
  }

  for (let i = 1; i < lastRow.length; i++) {
    nextNum = lastRow[i - 1] + lastRow[i]

    newRow.push(nextNum)
  } 

  newRow.push(1)
  result.push(newRow)
  --numRows
  
  if (numRows > 2) {
    return pascalTriangle(numRows)
  } else {
    return result
  }
}