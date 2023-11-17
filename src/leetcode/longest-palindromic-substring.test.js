const longestPalindrome = require("./longest-palindromic-substring");

test.each([
  ["babad", "bab"],
  ["cbbd", "bb"],
  ["forgeeksskeegfor", "geeksskeeg"],
])("%s -> %s", (sequence, expected) => {
  expect(longestPalindrome(sequence)).toBe(expected);
});
