const topKFrequent = require("./top-k-frequent-words");

test.each([
  [
    ["i", "love", "leetcode", "i", "love", "coding"],
    2,
    ["i", "love"]
  ],
  [
    ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
    4,
    ["the", "is", "sunny", "day"],
  ],
])('%j, %s -> %j', (words, k, expected) => {
    expect(topKFrequent(words, k)).toStrictEqual(expected)
});
