import ClassRoom from './0-classroom.js';

function initializeRooms() {
  const arr = [];

  const firstClassRoom = new ClassRoom(9);
  arr.push(firstClassRoom);

  const secondClassRoom = new ClassRoom(20)
  arr.push(secondClassRoom);

  const thirdClassRoom = new ClassRoom(34);
  arr.push(thirdClassRoom);

  return arr;
};

export default initializeRooms;
