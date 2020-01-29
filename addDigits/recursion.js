const addDigits = (num) => {
  if (num > 9) {
    // pass new total to function
    return addDigits(Math.floor(num / 10) + (num % 10));
  } else {
    // otherwise, we return single digit
    return num;
  }
};
