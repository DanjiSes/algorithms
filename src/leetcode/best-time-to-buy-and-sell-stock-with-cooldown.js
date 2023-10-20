/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let held = -Infinity;
  let sold = -Infinity;
  
  let cooldown = 0;

  for (let i = 0; i < prices.length; i++) {
    let prevSold = sold;
    sold = held + prices[i];
    held = Math.max(held, cooldown - prices[i]);
    cooldown = Math.max(prevSold, cooldown);
  }

  return Math.max(sold, cooldown);
};

module.exports = maxProfit;
