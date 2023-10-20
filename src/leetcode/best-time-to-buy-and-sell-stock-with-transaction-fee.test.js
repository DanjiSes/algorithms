const maxProfit = require("./best-time-to-buy-and-sell-stock-with-transaction-fee");

test.each([
  [[1,3,2,8,9,4,9], 2, 9],
  [[1,3,7,5,10,3], 3, 6],
])("%j, %s -> %s", (prices, fee, expected) => {
  expect(maxProfit(prices, fee)).toBe(expected);
});
