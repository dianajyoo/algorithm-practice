const isValid = (s) => {
  // 'last in, first out' principle
  let stack = [];
  const brackets = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  for (const b of s) {
    // if left bracket, we push its right bracket to the stack
    if (brackets[b] !== undefined) {
      stack.push(b);
    } else {
      // if right bracket, we check if it matches the bracket in the stack
      if (brackets[stack.pop()] !== b) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
