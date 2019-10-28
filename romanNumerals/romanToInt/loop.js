const romanToInt = (s) => {
  const hash = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  let i = 0;
  let int = 0;
  
  while(i < s.length) {
    i += 1;
    let right = hash[s[i]];
    let left = hash[s[i - 1]];
    
    if(!right || right <= left) {        
      int += left;
    }
    
    if(right > left) {
      let exception = right - left;
      int += exception;
      i += 1;
    }
  }
  
  return int;
};