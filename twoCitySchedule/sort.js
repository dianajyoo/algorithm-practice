const twoCitySchedCost = (costs) => {
  let minCost = 0;
  
  // sort 2d array by lowest difference in cost between city B and city A
  // start of array will have lowest cost for city B and 
  // end will have lowest cost for city A
  costs.sort((a,b) => (a[1] - a[0]) - (b[1] - b[0]));

  for(let i = 0; i < costs.length / 2; i++) {
    let cityB = costs[i][1];
    let cityA = costs[costs.length - i - 1][0];
    
    // add lowest cost for each city until we reach midpoint of array
    minCost += cityB + cityA;
  }
  
  return minCost;
};