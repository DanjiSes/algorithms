const topKFrequent = require("./top-k-frequent-elements");

test.each([
  [[1, 1, 1, 2, 2, 3], 2, [1, 2]],
  [[1], 1, [1]],
])("%j, %s -> %j", (words, k, expected) => {
  expect(topKFrequent(words, k)).toStrictEqual(expected);
});
