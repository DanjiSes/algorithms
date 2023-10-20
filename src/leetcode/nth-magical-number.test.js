const nthMagicalNumber = require("./nth-magical-number");

test.each([
  [1, 2, 3, 2],
  [4, 2, 3, 6],
])("%s, %s, %s -> %s", (n, a, b, expected) => {
  expect(nthMagicalNumber(n, a, b)).toBe(expected);
});
