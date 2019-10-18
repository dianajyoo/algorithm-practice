const mostCommonWord = (paragraph, banned) => {
  let storage = {};
  banned.push('');
  paragraph = paragraph.toLowerCase().replace(/[^a-z]/g, ' ');
  paragraph = paragraph.split(' ');
  
  // add all banned words to storage with a value of 0
  for(const word of banned) {
    storage[word] = 0;
  }
  
  // keep count of non-banned words
  for(let word of paragraph) {
    if(storage[word] !== 0) {
      storage[word] = storage[word] + 1 || 1;
    }
  }

  // use reduce() to find return key with the greatest value
  return Object.keys(storage).reduce((a,b) => {
    return storage[a] > storage[b] ? a : b;
  });
};