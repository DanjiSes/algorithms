/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const hash = {};

  nums.forEach((num) => (hash[num] = (hash[num] || 0) + 1));

  return Object.entries(hash)
    .sort((a, b) => b[1] - a[1])
    .map(([num]) => Number.parseInt(num))
    .slice(0, k);
};

module.exports = topKFrequent;
