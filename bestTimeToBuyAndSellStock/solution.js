const maxProfit = (prices) => {
  let maxProfit = 0;
  let buy = prices[0];
  let sell = prices[1];
  let buyIndex = 0;
  let sellIndex = 1;
  
  for (let i=1; i < prices.length; i++) {  
    if (prices[i] < buy) {
      buy = prices[i];
      buyIndex = i;
    } else {
      sell = prices[i];
      sellIndex = i;
    }
    
    if ((buyIndex < sellIndex) && (sell - buy > maxProfit)) {
      maxProfit = sell - buy;
    }
  }
  
  return maxProfit;
};