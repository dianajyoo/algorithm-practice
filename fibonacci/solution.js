const fib = (N) => {
  let fibo = [0, 1];

  if (N <= 1) return fibo[N];

  for (let i = 1; i <= N; i++) {
    if (fibo[N]) return fibo[N];

    fibo.push(fibo[i - 1] + fibo[i]);
  }
};
