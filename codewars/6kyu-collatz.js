// A collatz sequence, starting with a positive integern, is found by repeatedly applying the following
// function to n until n == 1 :

// n = { n / 2 for even n ;
//      3n + 1 for odd n }

// collatz(4); // should return "4->2->1"
// collatz(3); // should return "3->10->5->16->8->4->2->1"

function collatz(n) {
  let newN;
  let result = `${n}`;

  function resultCollatz(n) {
    if (n === 1) {
      return result.split(" ").join("->");
    } else {

      n % 2 === 0 ? newN = n/2 : newN = 3 * n + 1;
      result += ` ${newN}`;

      resultCollatz(newN);
      return result.split(" ").join("->");
    }
  }

  return resultCollatz(n);
}
