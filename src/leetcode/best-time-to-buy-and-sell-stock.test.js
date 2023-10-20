const maxProfit = require("./best-time-to-buy-and-sell-stock");

test.each([
  [[7, 1, 5, 3, 6, 4], 5],
  [[7, 6, 4, 3, 1], 0],
])("%j -> %s", (prices, expected) => {
  expect(maxProfit(prices)).toBe(expected);
});
