var intToRoman = function(num) {
  let romanNumerals = {0: "", 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX", 10: "X", 20: "XX", 30: "XXX", 40: "XL", 50: "L", 60: "LX", 70: "LXX", 80: "LXXX", 90: "XC", 100: "C",200: "CC", 300: "CCC", 400: "CD", 500: "D", 600: "DC", 700: "DCC", 800: "DCCC", 900: "CM", 1000: "M", 2000: "MM", 3000: "MMM"},

      t = parseInt(num/1000) * 1000,
      hundreds = num - t,

      h = parseInt(num/100) * 100,
      tens = num - h,

      o = parseInt(num/10) * 10,
      ones = num - o,

      newH = parseInt(hundreds/100) * 100,
      newO = parseInt(tens/10) * 10;

  if (num.toString().length === 1) {
    return romanNumerals[num];
  } else if (num.toString().length === 2) {
    return romanNumerals[o] + romanNumerals[ones];
  } else if (num.toString().length === 3) {
    return romanNumerals[h] + romanNumerals[newO] + romanNumerals[num - (h + newO)];
  } else {
    let newT = parseInt((num - (t + newH))/10) * 10;

    return romanNumerals[t] + romanNumerals[newH] + romanNumerals[newT] + romanNumerals[num - (newT + newH + t)];
  }
}
