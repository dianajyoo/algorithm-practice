// Have the function QuestionsMarks(str) take the str string parameter, which will
// contain single digit numbers, letters, and question marks, and check if there are
// exactly 3 question marks between every pair of two numbers that add up to 10.
// If so, then your program should return the string true, otherwise it should return
// the string false. If there aren't any two numbers that add up to 10 in the string,
// then your program should return false as well.

// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true
// because there are exactly 3 question marks between 6 and 4, and 3 question marks
// between 5 and 5 at the end of the string.

// *not complete

function QuestionsMarks(str) {

  function checkSum(str) {
    let numArr = str.replace(/\D/g, "").split("");

    for (let i = 0; i < numArr.length - 1; i++) {
      if (Number(numArr[i]) + Number(numArr[i + 1]) === 10) {
        return [`${numArr[i]}`,`${numArr[i + 1]}`];
      } else {
        return false;
      }
    }
  }

  let newStr = str.replace(/[^\d?]/g, "");

  if (checkSum(str)) {
    let firstPos = newStr.indexOf(checkSum(str)[0]);
    // start checking for next position after first position in case there are
    // multiple of same values in str
    let secPos = newStr.indexOf(checkSum(str)[1], firstPos + 1);

    if (secPos - firstPos === 4) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }

}
