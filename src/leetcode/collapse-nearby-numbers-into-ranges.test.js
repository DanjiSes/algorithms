const collapse = require('./collapse-nearby-numbers-into-ranges')

test.each([
  [[1, 4, 5, 2, 3, 9, 8, 11, 0], "0-5,8-9,11"],
  [[1, 4, 3, 2], "1-4"],
  [[1, 4], "1,4"],
  [[1, 2], "1-2"],
  [[2, 2, 4, 5, 6, 8, 9, 11], "2,4-6,8-9,11"],
  [[1], "1"],
  [[], ""],
  [[-1,0,2,2,3,4,6], "-1-0,2-4,6"],
])('%s -> "%s"', (list, expected) => {
    expect(collapse(list)).toBe(expected);
});
