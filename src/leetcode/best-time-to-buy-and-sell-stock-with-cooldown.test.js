const maxProfit = require("./best-time-to-buy-and-sell-stock-with-cooldown")

test.each([
    [[1,2,3,0,2], 3],
    [[1], 0]
])('%j -> %s', (prices, expected) => {
    expect(maxProfit(prices)).toBe(expected)
})