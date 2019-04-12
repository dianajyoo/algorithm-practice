const reverseString = function(s) {
    let copy = [...s]
    
    for (let i = 0; i < s.length; i++) {
      s[i] = copy[copy.length - (i + 1)]
    }
};

