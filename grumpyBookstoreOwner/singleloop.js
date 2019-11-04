const maxSatisfied = (customers, grumpy, X) => {
  let satisfied = 0;
  let notSatisfied = 0;
  let max = 0;
  
  for(let i = 0; i < customers.length; i++) {
    if(grumpy[i] === 0) {
      satisfied += customers[i];
      customers[i] = 0;
    }
    if(i < X) {
      notSatisfied += customers[i];
      max = notSatisfied;
    } else {
      notSatisfied = notSatisfied - customers[i - X] + customers[i];

      if(notSatisfied > max) {
        max = notSatisfied;
      }
    }
  }
  
  return satisfied + max;
};