// Signature will always contain 3 numbers; n will always be a non-negative number
// If n == 0, then return an empty array

function tribonacci(signature,n){

  signature.push(signature.reduce( (total, num) => total += num ));

  if (n === 0) {
    return [];
  } else {
    while (signature.length !== n) {
      if (n !== 1) {
        signature.push(signature[signature.length - 3] + signature[signature.length - 2] + signature[signature.length - 1]);
      } else {
        return [signature[0]];
      }
    }
    return signature;
  }

}
