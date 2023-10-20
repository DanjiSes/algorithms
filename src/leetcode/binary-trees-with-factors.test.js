const numFactoredBinaryTrees = require("./binary-trees-with-factors");

test.each([
  [[2, 4], 3], // [2], [4], [4, 2, 2]
  [[2, 4, 5, 10], 7], // [2], [4], [5], [10], [4, 2, 2], [10, 2, 5], [10, 5, 2]
  [[18,3,6,2], 12]
])("%s -> %s", (arr, expected) => {
  expect(numFactoredBinaryTrees(arr)).toBe(expected);
});
