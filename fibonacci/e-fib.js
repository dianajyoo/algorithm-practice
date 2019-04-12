var fib = function(N) {
  let f = [0, 1];
  
  for (let i = 0; i < f.length - 1; i++) {
      f.push(f[i] + f[i + 1]);
      
      if (f[N] !== undefined) {
          return f[N];
      }
  }  
};