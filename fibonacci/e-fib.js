const fib = (N) => {
  let fib = [0,1]
  let nextNum

  for (let i = 1; i < N; i++) {
    nextNum = fib[i - 1] + fib[i]
    fib.push(nextNum)
  }
  
  return fib[N]
}