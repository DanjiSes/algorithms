const splitArraySameAverage = require("./split-array-with-same-average");

test.each([
  [[1, 2, 3, 4, 5, 6, 7, 8], true],
  [[3, 1], false],
  [[1, 2, 3, 4], true],
])("%j -> %s", (nums, expected) => {
  expect(splitArraySameAverage(nums)).toBe(expected);
});
