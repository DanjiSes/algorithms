/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let hold = -Infinity;
  let sold = 0;
  
  for (const price of prices) {
    hold = Math.max(hold, sold - price);
    sold = Math.max(sold, hold + price - fee);
  }

  return sold;
};

module.exports = maxProfit;
