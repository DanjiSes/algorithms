/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = "";

  // Прохожусь по каждому символу
  for (let i = 0; i < s.length; i++) {
    console.log(i);
    for (let j = 0; j < 2; j++) {
      console.log(j);
      let start = i;
      let end = i + j;
      while (s[start] && s[start] === s[end]) {
        start -= 1;
        end += 1;
      }
      if (end - start - 1 > res.length) {
        res = s.slice(start + 1, end);
      }
    }
  }

  return res;
};

console.log(longestPalindrome("a"));

module.exports = longestPalindrome;
