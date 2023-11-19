/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function (nums) {
  nums.sort((a, b) => b - a);

  let operationsCount = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) operationsCount += i;
  }

  return operationsCount;
};

module.exports = reductionOperations;
