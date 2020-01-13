def fib(n)
  f = [0, 1]

  while !f[n]
    nextNum = f[-1] + f[-2]
    f << nextNum
  end
  f[n]
end