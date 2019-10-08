const isValid = function(s) {
  // 'last in, first out' principle
  let stack = [];
  const brackets = {
      '{': '}',
      '[': ']',
      '(': ')'
  };
  
  for(let i=0; i < s.length; i++) {
      let p = s[i];
      // if left bracket, we push its right bracket to the stack
      if (brackets[p] !== undefined) {
          stack.push(brackets[p]);
      } else {
          // if right bracket, we check if it matches the bracket in the stack
          if (p !== stack.pop()) {
              return false;
          }
      }
  }

  return stack.length === 0;
};