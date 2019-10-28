// just fibonacci
// sequence is [1,2,3,5,8,13...] where each el is number of paths
// and each index is a step

const climbStairs = (n) => {
  let steps = [1,2];
  let i = 1;
  
  if(n === 1) return 1;
  while(n !== steps.length) {
      let nextStep = steps[i - 1] + steps[i];
      steps.push(nextStep);
      i++;
  }

  return steps[steps.length - 1];
};