const romanToInt = (s) => {
  const storage = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  
  let result = 0
  let copy = s.split("")
  
  for (const k in storage) {
    const current = copy[0]
    const next = copy[1]
    
    while(k === copy[0]) {
      result += storage[k]
      // remove the first roman letter
      copy.shift()
    }
    
    // for exception cases IX, IC, XC, XL, CD, CM
    // where first letter value is less than the second letter value
    if (storage[current] < storage[next]) {
      result += storage[next] - storage[current]
      // remove the two roman letters
      copy.shift()
      copy.shift()
    }
  }
  
  return result   
}