"https://leetcode.com/problems/lemonade-change"

var lemonadeChange = function(bills) {
  // for every 10, you need at least one 5
  // for every 20, you need at least one 10 and one 5 OR three 5's
  let storage = {"5": 0, "10": 0, "20": 0}

  if (bills[0] !== 5) {
    return false
  } else {
    for (let i = 0; i < bills.length; i++) {
      storage[bills[i]] = (storage[bills[i]] || 0) + 1

      if (bills[i] === 10) {
        if (storage["5"] <= 0) {
          return false
        }
        storage["5"] -= 1
      } else if (bills[i] === 20) {
        if (storage["10"] && storage["5"] > 0) {
          storage["10"] -= 1
          storage["5"] -= 1
        } else if (storage["5"] >= 3) {
          storage["5"] -= 3
        } else {
          return false
        }
      }
    }
  }
  return true
};
