let result = [[1], [1,1]]

const pascalTriangle = (numRows) => {
  let lastRow = result[result.length - 1]
  let newRow = [1]
  let i = 1
  let nextNum

  // edge cases when numRows = 0, 1, or 2
  if (numRows < 1) {
    return []
  } else if (numRows === 1) {
    return [[1]]
  } else if (numRows === 2) {
    return result
  }

  while (numRows > 2 && i < lastRow.length) {
    nextNum = lastRow[i - 1] + lastRow[i]

    newRow.push(nextNum)
    i++
  } 

  newRow.push(1)
  result.push(newRow)
  --numRows
  
  if (numRows > 2) {
    return pascalsTriangle(numRows)
  } else {
    return result
  }
}