const canVisitAllRooms = (rooms) => {
  // roomsVisited is an array of all possible rooms
  // that we visit from 0, 1, 2,...rooms.length - 1
  let roomsVisited = Array.from(Array(rooms.length).keys());
  // room at index 0 is always open
  roomsVisited[0] = true;
  // stack stores all keys found in each room that we visit
  let stack = [0];
  
  while(stack.length > 0) {
    let foundKey = stack.pop();
    for(const key of rooms[foundKey]) {
      if(roomsVisited[key] !== true) {
        // mark a room as true when we visit it
        roomsVisited[key] = true;
        // store all new keys
        stack.push(key);
      }
    }
  }
  
  // if all rooms are marked as true (hence, visited), then size will be 1
  return new Set(roomsVisited).size === 1;
};