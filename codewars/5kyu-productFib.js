// The Fibonacci numbers are the numbers in the following integer sequence (Fn):
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such as
// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying
// F(n) * F(n+1) = prod.

// productFib(714) # should return [21, 34, true], # since F(8) = 21, F(9) = 34 and 714 = 21 * 34
// productFib(800) # should return [34, 55, false], # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55

function productFib(prod) {
  let fib = [0, 1],
      i = 0,
      p;

  while (prod !== p) {
    p = fib[i] * fib[i + 1]
    fib.push(fib[i] + fib[i + 1]);

    if (p > prod) {
      return [fib[i], fib[i + 1], p === fib[i - 1] * fib[i]];
    }
    i++;
  }

  return [fib[i - 1], fib[i], p === fib[i - 1] * fib[i]];
}
