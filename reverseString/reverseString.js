const reverseString = (s) => {
    let copy = [...s];
    
    for (let i = 0; i < s.length; i++) {
      s[i] = copy[s.length - 1 - i];
    }
};

