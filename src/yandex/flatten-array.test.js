const flatten = require("./flatten-array");

test.each([
  [
    [1, 2, [3, 4], 5],
    [1, 2, 3, 4, 5],
  ],
  [
    [1, [2, 3, [4, 5], 6], 7],
    [1, 2, 3, 4, 5, 6, 7],
  ],
])("%j -> %j", (list, expected) => {
  expect(flatten(list)).toStrictEqual(expected);
});
