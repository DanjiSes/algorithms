/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) {
    return 0; // Not enough days to make a profit
  }

  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    // Calculate the potential profit if selling on this day
    const potentialProfit = prices[i] - minPrice;

    // Update the maxProfit if the potential profit is greater
    if (potentialProfit > maxProfit) {
      maxProfit = potentialProfit;
    }

    // Update the minimum price seen so far
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }

  return maxProfit;
};

module.exports = maxProfit;
