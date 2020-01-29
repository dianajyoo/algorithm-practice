const reverseString = (str) => {
  if (str.length <= 1) {
     return str
  } else {
     return reversedStr = reverseString(str.slice(1)) + str[0]
  }
}