const fib = (N) => {
  let fib = [0,1]
  let nextNum
  
  if (N === 0) return 0
  if (N === 1) return 1

  for (let i = 1; i < N; i++) {
    nextNum = fib[i - 1] + fib[i]
    fib.push(nextNum)
    
    if (fib[N]) {
      return fib[N]
    }
  }
}