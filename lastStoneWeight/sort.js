const lastStoneWeight = (stones) => {
  let newWeight;
  let j;
  // sort stones from greatest to least weight
  stones.sort((a, b) => b - a);

  for (let i = 1; i < stones.length; i++) {
    j = i;
    // calculate new weight
    newWeight = stones[i - 1] - stones[i];
    // destroyed stone has 0 weight
    stones[i - 1] = 0;
    // we assign current stone with new weight
    stones[i] = newWeight;

    // if current stone is not in correct sorted position,
    // keep swapping until it is
    while (stones[j] < stones[j + 1]) {
      let temp = stones[j + 1];
      stones[j + 1] = stones[j];
      stones[j] = temp;

      j += 1;
    }
  }

  // if final weight in stones array is not 0, then we return that weight
  // will return 0 when final two weights are equal to each other
  return stones[stones.length - 1] > 0 ? stones[stones.length - 1] : 0;
};
