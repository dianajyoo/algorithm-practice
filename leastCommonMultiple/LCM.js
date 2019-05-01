// can find lowest common multiple
// by dividing either a or b by GCD
// and then multiplying by other number (a or b)
const LCM = (a,b) => {
  const g = GCD(a,b)
  return (a / g) * b
}

// known as euclidean algorithm
// used to find greatest common divisor/factor
const GCD = (a,b) => {
  if (b === 0) {
    return a
  } else {
    return GCD(b, a % b)
  }
} 