const duplicateZeros = (arr) => {
  let numOfDuplicates = 0;
  let index = arr.length - 1;

  for (let currIndex = 0; currIndex <= index - numOfDuplicates; currIndex++) {
    if (arr[currIndex] === 0) {
      if (currIndex + numOfDuplicates === index) {
        arr[index] = 0;
        index -= 1;
        break;
      }
      numOfDuplicates += 1;
    }
  }

  let lastIndex = index - numOfDuplicates;

  for (let i = lastIndex; i >= 0; i--) {
    if (arr[i] !== 0) {
      arr[i + numOfDuplicates] = arr[i];
    } else {
      arr[i + numOfDuplicates] = 0;
      numOfDuplicates -= 1;
      arr[i + numOfDuplicates] = 0;
    }
  }
};
