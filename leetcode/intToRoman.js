// For example, two is written as II in Roman numeral, just two one's added together.
// Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII.
// Instead, the number four is written as IV. Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

// Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

var intToRoman = function(num) {
  let romanNumerals = {0: "", 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX", 10: "X", 20: "XX", 30: "XXX", 40: "XL", 50: "L", 60: "LX", 70: "LXX", 80: "LXXX", 90: "XC", 100: "C",200: "CC", 300: "CCC", 400: "CD", 500: "D", 600: "DC", 700: "DCC", 800: "DCCC", 900: "CM", 1000: "M", 2000: "MM", 3000: "MMM"};

  let t = parseInt(num/1000) * 1000;
  let hundreds = num - t;

  let h = parseInt(num/100) * 100;
  let tens = num - h;

  let o = parseInt(num/10) * 10;
  let ones = num - o;

  let newH = parseInt(hundreds/100) * 100;
  let newO = parseInt(tens/10) * 10;

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
