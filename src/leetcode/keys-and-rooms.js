/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visit = new Set([0]);
  const len = rooms.length;

  let result = false;

  const search = (room) => {
    if (result) return;

    if (visit.size == len) {
      result = true;
      return;
    }
    for (let i = 0; i < rooms[room].length; i++) {
      if (visit.has(rooms[room][i])) continue;
      visit.add(rooms[room][i]);
      search(rooms[room][i]);
    }
  };

  for (let i = 0; i < rooms[0].length; i++) {
    if (visit.has(rooms[0][i])) continue;
    visit.add(rooms[0][i]);
    search(rooms[0][i]);
  }
  
  return result;
};
module.exports = canVisitAllRooms;
