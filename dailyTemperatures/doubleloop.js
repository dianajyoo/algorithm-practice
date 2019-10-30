const dailyTemperatures = (T) => {
  let day = 0;
  let result = [];
  
  while(day < T.length) {
    let currTemp = T[day];
    
    for(let i = 0; i < T.length; i++) {
      let temp = T[i];
      if(day < i) {
        if(currTemp < temp) {
          let numOfDays = i - day;
          result.push(numOfDays);
          break;
        }
      }
    }
    if(!result[day]) {
      result.push(0);
    }
    day += 1;
  }
  
  return result;
};