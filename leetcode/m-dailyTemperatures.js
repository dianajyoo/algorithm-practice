// Given a list of daily temperatures T, return a list such that, for each day in the input,
// tells you how many days you would have to wait until a warmer temperature. If there is
// no future day for which this is possible, put 0 instead.

// For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73],
// your output should be [1, 1, 4, 2, 1, 1, 0, 0].

var dailyTemperatures = function(T) {
    let count = 0, list = []
    for (let i = 0; i < T.length; i++) {
      for (let j = i + 1; j < T.length + 1; j++) {
        let currentTemp = T[i], nextTemp = T[j]
        count++

        if (currentTemp < nextTemp) {
          list.push(count)
          count = 0
          // break out of loop once we find greater temp and 
          // continue to next temp in T
          break
        }

        // if no greater temp exists, push 0 to list
        // and reset the count
        if (!nextTemp) {
          list.push(0)
          count = 0
          break
        }
      }
    }
    return list
};
