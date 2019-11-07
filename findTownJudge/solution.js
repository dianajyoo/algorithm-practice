const findJudge = (N, trust) => {
  let hash = {};
  
  if(trust.length < 1) return N;
  
  // store counts of all possible judges
  for(let i = 0; i < trust.length; i++) {
    let possibleJudge = trust[i][1];
    hash[possibleJudge] = hash[possibleJudge] + 1 || 1;
  } 
  
  for(let i = 0; i < trust.length; i++) {
    let notJudge = trust[i][0];
    let possibleJudge = trust[i][1];
    
    // if a person who cannot be judge is found in hash,
    // we delete the key value pair
    if(hash[notJudge] !== undefined) {
      delete hash[notJudge];
    }
    // everyone minus the judge itself, or N - 1, must trust the judge
    // delete any possible judges that do not meet this
    if(hash[possibleJudge] !== N - 1) {
      delete hash[possibleJudge];
    }
  }
  
  // if hash is empty, there are no possible judges
  return Object.keys(hash).length > 0 ? Object.keys(hash)[0] : -1;
};