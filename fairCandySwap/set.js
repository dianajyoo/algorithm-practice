const fairCandySwap = (A, B) => {
  let sumA = A.reduce((total, i) => total += i);
  let sumB = B.reduce((total, i) => total += i);
  
  // create a Set of B array
  let setB = new Set(B);
  
  for(let i = 0; i < A.length; i++) {
    // b is the possible candy size to swap from B's candy list
    const b = A[i] + (sumB - sumA) / 2;
    
    // use Set to do a O(1) lookup to check whether or not B has b
    if(setB.has(b)) {
      return [A[i], b];
    }
  }
};