/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let low = Infinity,
    totalProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    low = Math.min(low, prices[i]);

    if (prices[i] > low) {
      totalProfit += prices[i] - low;
      low = prices[i];
    }
  }

  return totalProfit;
};

module.exports = maxProfit;
