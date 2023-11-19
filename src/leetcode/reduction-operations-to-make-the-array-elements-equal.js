/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function (nums) {
  nums.sort();

  let operationsCount = 0;

  let l = nums.length - 2;
  let r = nums.length - 1;

  while (r > 0) {
    if (nums[r] > nums[l]) {
      nums[r] = nums[l];
      operationsCount++;
    }

    l--;

    if (l < 0) {
      r--;
      l = r - 1;
    }
  }

  return operationsCount;
};

console.log(reductionOperations([5, 1, 3]));
console.log(reductionOperations([1, 1, 1]));
console.log(reductionOperations([1, 1, 2, 2, 3]));

module.exports = reductionOperations;
