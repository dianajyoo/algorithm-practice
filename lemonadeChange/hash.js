const lemonadeChange = (bills) => {
  let hash = {};

  if (bills[0] !== 5) return false;

  for (const bill of bills) {
    hash[bill] = hash[bill] + 1 || 1;

    if (bill === 10) {
      if (hash['5'] > 0) {
        hash['5'] -= 1;
      } else {
        return false;
      }
    }

    if (bill === 20) {
      if (hash['5'] > 0) {
        if (hash['10'] > 0) {
          hash['10'] -= 1;
          hash['5'] -= 1;
        } else if (hash['5'] > 2) {
          hash['5'] -= 3;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  return true;
};
