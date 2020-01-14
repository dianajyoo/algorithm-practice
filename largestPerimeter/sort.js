const largestPerimeter = (A) => {
  // sort in ascending (or descending) order
  // so that largest possible length can be determined
  A.sort((a, b) => a - b);

  let longest = A[A.length - 1];

  for (let i = A.length - 2; i >= 0; i--) {
    // two smallest lengths must be greater than largest length
    // in triangles
    if (A[i] + A[i - 1] > longest) {
      return longest + A[i] + A[i - 1];
    }

    longest = A[i];
  }

  // if no possible lengths, perimeter is 0
  return 0;
};
