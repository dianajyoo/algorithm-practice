const maxSatisfied = (customers, grumpy, X) => {
  let satisfied = 0;
  let prev = 0;
  
  // find all satisfied customers and replace each with 0
  // to prevent adding duplicates
  for(let i = 0; i < customers.length; i++) {
    if(grumpy[i] === 0) {
      satisfied += customers[i];
      customers[i] = 0;
    }
  }
  
  // find max number of customers with grumpy[i] === 1
  // within X minutes
  for(let i = 0; i < customers.length; i++) {
    let notSatisfied = findSum(customers.slice(i, i + X));

    if(notSatisfied > prev) {
      prev = notSatisfied;
    }
  }
  
  return satisfied + prev;
};

const findSum = (list) => {
  return list.reduce((total, el) => total += el);
}