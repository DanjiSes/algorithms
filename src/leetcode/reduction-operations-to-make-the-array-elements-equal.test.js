const reductionOperations = require("./reduction-operations-to-make-the-array-elements-equal");

test.each([
  [[5, 1, 3], 3],
  [[1, 1, 1], 0],
  [[1, 1, 2, 2, 3], 4],
])("$j -> %s", (arr, expected) => {
  expect(reductionOperations(arr)).toBe(expected);
});
