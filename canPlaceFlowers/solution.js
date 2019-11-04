const canPlaceFlowers = (flowerbed, n) => {
  let count = 0;
  
  for(let i = 0; i < flowerbed.length; i++) {
    let current = flowerbed[i];
    let right = flowerbed[i + 1];
    
    // if current position has flower, we don't increment count
    if(current === 1) {
      // we skip two places since we can't plant adjacent flowers
      i += 1;
    } else {
      // if current position is empty, we check if right position has a flower or not
      // also check if right is undefined in case last position has no flower
      if(right === 0 || right === undefined) {
        count += 1;
        i += 1;
      }   
    }
  }
  
  return count >= n;
};