/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const hash = new Map();

  for (let i = 0; i < words.length; i++) {
    hash.set(words[i], (hash.get(words[i]) || 0) + 1);
  }

  return [...hash.entries()]
    .sort((a, b) => (b[1] !== a[1] ? b[1] - a[1] : a[0].localeCompare(b[0])))
    .slice(0, k)
    .map((e) => e[0]);
};

module.exports = topKFrequent