// For example: [1,2,3,4,5] for 2 beggars will return a result of [9,6], as the first one takes [1,3,5],
// the second collects [2,4].

// The same array with 3 beggars would have in turn have produced a better out come for the second beggar: [5,7,3],
// as they will respectively take [1,4], [2,5] and [3].

// Also note that not all beggars have to take the same amount of "offers", meaning that the length of the array is not necessarily a multiple of n; length can be even shorter, in which case the last beggers will of course take nothing (0).

let finalSum = [];

function beggars(values, n) {

  let sum = 0;

  let arr = values.reduce( (total, value) => {
      if ((values.indexOf(value) + n) % n === 0) {
        total.push(value);
        sum += value;
      }
      return total;
    }, []);

  let diffArr = values.filter(x => !arr.includes(x));
  finalSum.push(sum)

  n--
  if (n === 0) {
    return finalSum;
  } else {
    beggars(diffArr, n);
    return finalSum;
  }

}
