const maxProfit = require('./best-time-to-buy-and-sell-stock-ii')

test.each([
  [[7,1,5,3,6,4], 7],
  [[1,2,3,4,5], 4],
  [[7,6,4,3,1], 0]
])("%j -> %s", (prices, expected) => {
  expect(maxProfit(prices)).toBe(expected);
});
