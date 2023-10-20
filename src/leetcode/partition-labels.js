/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const lastIdxByChar = {};

  for (let i = 0; i < s.length; i++) {
    lastIdxByChar[s[i]] = i;
  }

  let result = [];
  let start = 0;
  let last = 0;

  for (let i = 0; i < s.length; i++) {
    last = Math.max(last, lastIdxByChar[s[i]]);
    
    if (i == last) {
      result.push(last - start + 1);
      start = last + 1;
    }
  }

  return result;
};

module.exports = partitionLabels;
