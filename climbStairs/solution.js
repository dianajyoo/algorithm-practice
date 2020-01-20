// just fibonacci
// sequence is [1,2,3,5,8,13...] where each el is number of paths
// and each index is a step

const climbStairs = (n) => {
  let start = [1, 2];

  if (n === 1 || n === 2) return n;

  for (let i = 1; i < n; i++) {
    start.push(start[i - 1] + start[i]);

    if (start.length === n) {
      return start[n - 1];
    }
  }

  return 0;
};