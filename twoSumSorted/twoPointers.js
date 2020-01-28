const twoSum = (numbers, target) => {
  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    if (numbers[i] + numbers[j] === target) {
      return [i + 1, j + 1];
    }

    if (numbers[i] + numbers[j] > target) {
      j -= 1;
    }

    if (numbers[i] + numbers[j] < target) {
      i += 1;
    }
  }

  return -1;
};
