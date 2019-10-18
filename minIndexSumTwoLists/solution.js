const findRestaurant = (list1, list2) => {
  let storage = {};
  let result = [];
  let prevIndex;
  
  // store each restaurant and its index of list1
  list1.forEach((restaurant, i) => {
    storage[restaurant] = i;
  });
  
  for(let i=0; i < list2.length; i++) {
    let restaurant = list2[i];
    
    if(storage[restaurant] !== undefined) {
      result.push(restaurant);
      // calculate total index of current restaurant
      let newIndex = storage[restaurant] + i;
      
      // we want restaurant with smallest total index
      // if total index of current restaurant is less than previous one,
      // we remove previous restaurant at index 0 with shift()
      if(prevIndex > newIndex) {
        result.shift();
      }
      // otherwise, we remove the current resturant at index i
      if(prevIndex < newIndex) {
        result.pop();
      }
      // save current restaurant to prevIndex
      // so we can compare its total index with next restaurant
      prevIndex = newIndex; 
    }
  }
  return result;
};